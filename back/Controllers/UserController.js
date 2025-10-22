const { User, ValidateUser, LoginValidate } = require('../Modules/User')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')
const { cloudUpload, cloudRemove } = require('../Config/cloudUpload')
const fs = require('fs')


/**
 * @desc Register New User
 * @route POST /api/auth/register
 * @access Public
 */


const RegisterNewUser = async (req, res) => {
  try {
    // ✅ Validate user input
    const { error } = ValidateUser(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // ✅ Check if user exists
    const userExist = await User.findOne({ Email: req.body.Email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.Password, salt);

    // ✅ Create user
    const user = new User({
      Name: req.body.Name,
      Email: req.body.Email,
      Password: hashPassword,
    });

    await user.save();
    return res.status(201).json({
    message:
        "User Created Successfully and we sent an email now, go to verify your email",
    });
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({ message: error.message || "Server Error" });
  }
};


const LoginUser = asyncHandler(async (req, res) => {
  const { error } = LoginValidate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const user = await User.findOne({ Email: req.body.Email })

  if (!user) {
    return res.status(400).json({ message: "Email or Password are not correct" });
  }

  const validPassword = await bcrypt.compare(req.body.Password, user.Password);
  if (!validPassword) {
    return res.status(400).json({ message: "Email or Password are not correct" });
  }


  await user.save();

  // ✅ إنشاء التوكن
  const token = jwt.sign(
    { _id: user._id, isAdmin: user.isAdmin },
    process.env.TOKEN_SECRET
  );

  const { password, ...others } = user._doc;
  others.token = token;

  return res.status(200).json({
    message: "Login successful",
    user: others,
  });
});



// ================== Logout ==================
const logoutUser = asyncHandler(async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict"
    })
    res.status(200).json({ message: "Logged out successfully" })
})

// ================== Delete User ==================
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        return res.status(404).json({ message: "User is not Found" })
    }
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "User Deleted Successfully" })
})

// ================== Get User by ID ==================
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        return res.status(404).json({ message: "User Not Found" })
    }
    res.status(200).json(user)
})

// ================== Get All Users ==================
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

// ================== Upload Profile Photo ==================
const uploadPhoto = asyncHandler(async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" })
    }

    const imagePath = path.join(__dirname, `../images/${req.file.filename}`)
    const result = await cloudUpload(imagePath)

    const user = await User.findById(req.user._id)
    if (user.profilePhoto.publicId !== null) {
        await cloudRemove(user.profilePhoto.publicId)
    }

    user.profilePhoto = {
        url: result.secure_url,
        publicId: result.public_id
    }
    await user.save()

    res.status(200).json({
        url: result.secure_url,
        publicId: result.public_id
    })
    fs.unlinkSync(imagePath)
})

module.exports = {
    LoginUser,
    RegisterNewUser,
    logoutUser,
    deleteUser,
    getUserById,
    getAllUsers,
    uploadPhoto
}
