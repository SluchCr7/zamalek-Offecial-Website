const express = require('express')
const route = express.Router()
const {loginUser,
    register,
    logoutUser,
    deleteUser,
    getUserById,
    getAllUsers,
    uploadPhoto
} = require('../Controllers/UserController')
const photoUpload = require('../Middelwares/uploadPhoto')
const protect = require('../Middelwares/authMiddelware')
route.route('/register')
    .post(register)

route.route('/login')
    .post(loginUser)

route.route('/delete/:id')
    .delete(deleteUser)

route.route('/all')
    .get(getAllUsers)

route.route('/:id')
    .get(getUserById)
route.route('/logout')
    .post(logoutUser)

route.route('/upload')
    .post( protect , photoUpload.single("image"), uploadPhoto )

module.exports = route