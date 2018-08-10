const axios = require('axios')
const Messages = require('../db/models/messages')

if (process.env.NODE_ENV !== 'production') require('../../secrets')

let getInitialMessages = async () => {
  let response = await axios.get(`https://api.groupme.com/v3/groups/10236869/messages?token=${process.env.GROUPME_ACCESS_TOKEN}&limit=100`)
  let messages = response.data.response.messages
  try {
    for(let i = 0; i < messages.length; i++){
      let message = messages[i]
      Messages.create({
        userId: await message.sender_id,
        content: await message.text,
        likers: await message.favorited_by
      })
    }

  } catch (err) {
    console.error('caught an error', err)
  }
}

let getRestOfMessages = async () => {
  let initialResponse = await axios.get(`https://api.groupme.com/v3/groups/10236869/messages?token=${process.env.GROUPME_ACCESS_TOKEN}&limit=100`)
  let messages = initialResponse.data.response.messages
  let lastMsgId = messages[99].id
  for(let i = 0; i < 170; i++){
    // console.log('lastmessageid: ', lastMsgId)
    let newResponse = await axios.get(`https://api.groupme.com/v3/groups/10236869/messages?token=${process.env.GROUPME_ACCESS_TOKEN}&limit=100&before_id=${lastMsgId}`)
    messages = newResponse.data.response.messages
    for(let z = 0; z < 100; z++){
      let message = messages[z]
      Messages.create({
        userId: await message.sender_id,
        content: await message.text,
        likers: await message.favorited_by
      })
    }
    lastMsgId = newResponse.data.response.messages[99].id
  }
}

let getMessages = async () => {
  await getInitialMessages()
  await getRestOfMessages()
}

// getMessages()
