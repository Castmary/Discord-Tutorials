const { readdirSync } = require('fs')
const { join } = require('path')

const cmdPath = join(__dirname, "..", "commands")

module.exports.run = (client) => {
    for (const cmd of readdirSync(cmdPath).filter(cmd => cmd.endsWith('.js'))) {
        const command = require(`${cmdPath}/${cmd}`)
        client.commands.set(command.info.name, command)
      
    }
    console.log(`Loaded ${client.commands.size} commands!`)
}