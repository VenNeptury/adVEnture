const owo = require('../../utility/nekos.js');
// const config = require('config');
module.exports = {
    name: 'pat',
    description: 'Sends a pat gif/picture.',
    extended: '',
    usage: '',
    aliases: [],
    guildonly: false,
    developersOnly: false,
    args: false,
    category: 'OwO',
    memberPermission: '',
    botPermission: '',
    async execute(message, args) {
        const image = await owo.getImage('pat');
        const output = owo.embed(message.author)
            .setImage(image);
        if (args.length) {
            const member = owo.getMember(message, args, 0);
            if (member) output.setDescription(`*${member} was patted by ${message.author}*`);
        }
        message.channel.send(output);
    }
};