const express = require('express')
const router = express.Router()
const contributeRouter = require('./contribute')
const editorRouter = require('./editor')
const authRouter = require('./authenticate')
const previewRouter = require('./preview')
const reviewRouter = require('./review')
const dashboardRouter = require('./dashboard')
const viewTutorialRouter = require('./viewTutorial')
const subjectRouter = require('./subject')

const subjectMap = require('../subjectMap.json')
console.log({ subjectMap })
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { subjects: subjectMap})
})

module.exports = {
  router,
  contributeRouter,
  editorRouter,
  authRouter,
  dashboardRouter,
  previewRouter,
  reviewRouter,
  viewTutorialRouter,
  subjectRouter
}