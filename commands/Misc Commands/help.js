const Discord = require('discord.js');
const { prefix, botname, gitlink, creator } = require('../../config.json');

module.exports.run = async (client, message, args) => {
    const hembed = new Discord.MessageEmbed()
        .setAuthor(`Hi! My name is ${botname}.`)
		.setDescription(`Are you looking for the command list? [Click here](https://cevacinevus.gitbook.io/juicebot/)`)
		.setColor("BLURPLE")
        .setFooter(`Invoked by ${message.author.username}`, message.author.avatarURL());
    message.channel.send(hembed);
};

module.exports.help = {
    name: "help",
    description: "Shows you information about the bot.",
    aliases: []
};