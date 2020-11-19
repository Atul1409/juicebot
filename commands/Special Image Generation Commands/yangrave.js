const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports.run = async (client, message, args) => {
		var user = message.mentions.users.first() || message.author;
		const canvas = Canvas.createCanvas(1280, 720);
		const ctx = canvas.getContext('2d');
		const yangrave = await Canvas.loadImage('https://cdn.discordapp.com/attachments/756209304918556723/778899115823071232/2k5szyk9v8x51.png');
		ctx.drawImage(yangrave, 0, 0, 1280, 720);
		const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'png', size: 512 }));
		ctx.drawImage(avatar, 736, 168, 450, 450);
    let attachment = new Discord.MessageAttachment(canvas.toBuffer(), "yangrave.png");
    return message.channel.send(attachment);
};

module.exports.help = {
    name: "yangrave",
    description: "Puts someone's profile picture in Yandere Simulator.",
    aliases: []
};