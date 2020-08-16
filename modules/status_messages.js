const client = require('../index').client;
const intervalInMS = 15000;

let index = 0;

setInterval(() => {

    const userCount = client.users.cache.size;
    const guildCount = client.guilds.cache.size;

    const statusMessages = [
        { type: 'WATCHING', name: `Hentai | /help`},
        { type: 'WATCHING', name: `${guildCount} Servers | /help`},
        { type: 'LISTENING', name: `${userCount} Users | /help`},
        { type: 'WATCHING', name: `You | /help`},
        { type: 'WATCHING', name: `and waiting | /help`},
        { type: 'WATCHING', name: `Osana | /help`}
        //Does this last one work? I've commented it out as a safe feature.
        //{ type: 'PLAYING', name: `the Matrix | /help'}
    ]

    client.user.setActivity(statusMessages[index]);
    index += 1;
    if (index == statusMessages.length) index = 0;
}, intervalInMS);
