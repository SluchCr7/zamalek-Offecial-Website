const express = require('express')
const route = express.Router()
const {addNews , deleteNews , updateNew , getAllNews , getNewById} = require('../Controllers/NewsController')
const photoUpload = require('../Middelwares/uploadPhoto')
route.route("/add")
    .post(photoUpload.fields([{ name: 'image', maxCount: 1 }]),addNews)

route.route("/delete/:id")
    .delete(deleteNews)

route.route("/update/:id")
    .put(updateNew)

route.route('/all')
    .get(getAllNews)

route.route('/:id')
    .get(getNewById)
module.exports = route