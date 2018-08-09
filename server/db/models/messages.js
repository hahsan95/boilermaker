const Sequelize = require('sequelize')
const db = require('../db')

const Messages = db.define('messages', {
  userId: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  likers: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  }
})

module.exports = Messages
