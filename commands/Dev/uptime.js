module.exports = {
    name: 'uptime',
    description: 'Returns the uptime of the bot.',
    extended: '',
    usage: '',
    aliases: ['up'],
    guildonly: false,
    developersOnly: true,
    args: false,
    category: 'Dev',
    execute(message) {
        function time(ms) {
            const seconds = (ms / 1000).toFixed(1),
                minutes = (ms / (1000 * 60)).toFixed(1),
                hours = (ms / (1000 * 60 * 60)).toFixed(1),
                days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
            if (seconds < 60)
                return seconds + ' sec';
            else if (minutes < 60)
                return minutes + ' min';
            else if (hours < 24)
                return hours + ' hrs';
            else
                return days + ' days';
        }

        message.channel.send(`⏱️ **__Uptime:__**\n**Node:** *${time(process.uptime() * 1000)}*\n**Client:** *${time(message.client.uptime)}*`);
    }
};