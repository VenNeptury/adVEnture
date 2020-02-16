const owo = require('../../utility/nekos.js');
// const config = require('config');
module.exports = {
    name: 'hug',
    description: 'Sends a hug gif/picture.',
    extended: '',
    usage: '',
    aliases: [],
    guildonly: false,
    developersOnly: false,
    args: false,
    category: 'OwO',
    memberPermission: '',
    botPermission: '',
    async execute(message, _args, nekos) {
        const image = await owo.getImage(nekos, 'hug');
        const output = owo.embed(message.author)
            .setImage(image);
        message.channel.send(output);
    }
};