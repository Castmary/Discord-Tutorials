const { Client, Collection } = require('discord.js')
const { token } = require('./config')
const client = new Client()


client.on('ready', () => {
    console.log(`Hello there! My name is ${client.user.username}!`)
})
client.commands = new Collection();
const commands = require(`./handlers/command.js`)
commands.run(client)
client.events = new Collection();
const events = require(`./handlers/event.js`)
events.run(client)
client.login(token)