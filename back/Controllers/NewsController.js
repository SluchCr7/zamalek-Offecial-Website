const {News , validateNews, validateUpdateNews} = require('../Modules/News')
const asyncHandler = require('express-async-handler')
const path = require('path')
const { cloudUpload, cloudRemove } = require('../Config/cloudUpload')
const fs = require('fs')
const { photoUpload } = require('../Middelwares/uploadPhoto')
const {v2} = require('cloudinary')
const addNews = async (req, res) => {
    try {
        const { title, content } = req.body
        const image = req.files.image
        const result = await v2.uploader.upload(image[0].path , {resource_type : "image"})
        const news = new News({
            title ,
            content,
            Photo: {
                url: result.secure_url,
                publicId: result.public_id
            }
        })
        await news.save()    
        res.status(201).json(news)
        fs.unlinkSync(image[0].path)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAllNews = asyncHandler(async (req, res) => {
    const news = await News.find()
    res.status(200).json(news)
})

const getNewById = asyncHandler(async (req, res) => {
    const New = await News.findById(req.params.id)
    if (!New) return res.status(404).json({ message: "New is Not found" })
    res.status(200).json(New)
})

const deleteNews = asyncHandler(async (req, res) => {
    const New = await News.findById()
    if (!New) return res.status(404).json({ message: "New is Not found" })
    await News.findByIdAndDelete()
    res.status(200).json({ message: "New Deleted Successfully" })
})

const updateNew = asyncHandler(async(req,res)=>{
    const { error } = validateUpdateNews(req.body)
    if (error) return res.status(400).json({ error: error.details[0].message })
    const New = await new News.findByIdAndUpdate(req.params.id, {
        $set: {
            title : req.body.title,
            content : req.body.content
        }
    },{new : true})
    await New.save()
    res.status(200).json(New)
})

module.exports = {
    addNews,
    getAllNews,
    deleteNews,
    updateNew,
    getNewById
}