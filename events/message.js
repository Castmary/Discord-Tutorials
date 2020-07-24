const { owners, prefix } = require('../config')


module.exports = async(client,message) => {
    if(!message.guild || message.author.bot) return;

    const [command, ...cmdArgs] = message.content
    .slice(prefix.length)
    .trim()
    .split(/\s+/)

    if(!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    const cmd = client.commands.get(command)

    if(!cmd) return;
    if(!message.channel.permissionsFor(message.guild.me).toArray().includes(`SEND_MESSAGES`)) return;
    if(cmd.requirements.ownerOnly && !owners.includes(message.author.id)) return message.channel.send(`You aren't one of the bot developers! :)`)
    if(cmd.requirements.uPerms && !message.member.permissions.has(cmd.requirements.uPerms)) return message.channel.send(`You do not have permissions to use this command.`)
    if(cmd.requirements.cPerms && !message.guild.me.permissions.has(cmd.requirements.cPerms)) return message.channel.send(`I do not have permissions for this command.`)
    cmd.run(client, message, cmdArgs)
}