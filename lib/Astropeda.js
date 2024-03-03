//Astropeda
const { Client, Boom } = require('@adiwajshing/baileys')
const { Boom } = require('@hapi/boom')

// Create a new WhatsApp client
const client = new Client()

// Connect to WhatsApp
client.connect()

// Listen for incoming messages
client.on('message-new', async (message) => {
  // Extract the message content and the sender's number
  const { body, from } = message

  // Check if the message contains a specific keyword
  if (body.toLowerCase().includes('hello')) {
    // Send a response message
    await client.sendMessage(from, 'Hello there!')
  } else if (body.toLowerCase() === 'goodbye') {
    // End the session
    await client.logout()
  }
})
//cmd
const { MessageType } = require('@adiwajshing/baileys')
const jokes = require('./lib/template/jokes.json') // import jokes from a json file

async function handleMessage(conn, citel) {
    if (citel.message.conversation) {
        const text = citel.message.conversation.toLowerCase()
        if (text.includes('joke')) {
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
            await conn.sendMessage(citel.chat, { text: randomJoke }, { quoted: citel })
        }
    }
}
//
// Listen for connection errors
client.on('error', (err) => {
  console.error(err)
})

// Listen for disconnections
client.on('disconnected', (reason) => {
  console.log(`Disconnected: ${reason}`)
})