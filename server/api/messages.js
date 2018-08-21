const router = require('express').Router()
const {Messages} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let allMessages = await Messages.findAll({
      where: {
        userId: '4935400'
        // likers: {
        //   [Op.contains]: ["13997014", "15930778", "21812426", "4935400", "12326399"]
        // }
      }
    })
    res.json(allMessages)
  } catch (err) {
    console.error(err)
  }
})
