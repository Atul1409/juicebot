const { leveling } = require('../../index.js');
const canvacord = require('canvacord');

module.exports.run = async (client, message, args) => {
	var user = message.mentions.users.first() || message.author;
	var output = await leveling.Fetch(user.id);
	const rank = new canvacord.Rank()
    .setAvatar(user.displayAvatarURL({format: 'png', size: 512}))
    .setCurrentXP(output.xp)
    .setRequiredXP(100 - output.xp)
    .setStatus(user.presence.status)
    .setProgressBar("#FFFFFF")
    .setUsername(user.username)
    .setDiscriminator(user.discriminator);

		rank.build()
    	.then(data => {
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        message.channel.send(attachment);
    });
};

module.exports.help = {
    name: "rank",
    description: "Checks on your/someone's rank.",
    aliases: []
};