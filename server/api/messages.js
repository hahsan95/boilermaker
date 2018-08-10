const router = require('express').Router()
const {Messages} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let allMessages = await Messages.findAll()
    res.json(allMessages)
  } catch (err) {
    console.error(err)
  }
})
