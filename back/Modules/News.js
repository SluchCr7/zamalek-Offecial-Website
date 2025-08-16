const mongoose = require('mongoose')
const joi = require('joi')

const NewsSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    Photo: {
        type: Array,
        required: true
    },
},{timestamps: true})

const News = mongoose.model('News', NewsSchema)

const validateNews = (obj) => {
    const schema = joi.object({
        title : joi.string().required(),
        content : joi.string().required(),
    })
    return schema.validate(obj)
}

const validateUpdateNews = (obj) => {
    const schema = joi.object({
        title : joi.string(),
        content : joi.string(),
    })
    return schema.validate(obj)
}
module.exports = {News, validateNews , validateUpdateNews}