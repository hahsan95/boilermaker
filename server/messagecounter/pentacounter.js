const axios = require('axios')
const {Messages} = require('../db/models')

if (process.env.NODE_ENV !== 'production') require('../../secrets')

let getMessages = async () => {
  let response = await axios.get(`https://api.groupme.com/v3/groups/10236869/messages?token=${process.env.GROUPME_ACCESS_TOKEN}`)
  let messages = response.data.response.messages
  try {
    for(let i = 0; i < messages.length; i++){
      let message = messages[i]
      console.log(message.text)
      // Messages.create({
      //   userId: await message.sender_id,
      //   content: await message.text,
      //   likers: await message.favorited_by
      // })
    }

  } catch (err) {
    console.error('caught an error', err)
  }
}

getMessages()
