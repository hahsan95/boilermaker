const router = require('express').Router()
const {Messages} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    let allMessages = await Messages.findAll({
      where: {

      }
    })
    res.json(allMessages)
  } catch (err) {
    console.error(err)
  }
})
