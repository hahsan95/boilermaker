const axios = require('axios')
const {Messages} = require('../db/models')

if (process.env.NODE_ENV !== 'production') require('../../secrets')

let getMessages = async () => {
  let response = await axios.get(`https://api.groupme.com/v3/groups/10236869/messages?token=${process.env.GROUPME_ACCESS_TOKEN}`)
  try {
    let messages = response
    console.log(messages)

  } catch (err) {
    console.error('caught an error', err)
  }}
}

getMessages()
