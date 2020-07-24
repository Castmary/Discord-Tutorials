module.exports.run = async (client, message, args) => {
        message.channel.send(`pong`)
}

module.exports.info = {
    name: 'ping',
    description: 'testing a command',
    aliases: ['test']
}

module.exports.requirements = {
    uPerms: [],
    cPerms: [],
    ownerOnly: false
}