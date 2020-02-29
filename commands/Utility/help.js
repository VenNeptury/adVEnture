const functions = require('../../utility/functions.js');
const config = require('config');
module.exports = {
    name: 'help',
    description: 'Lists all commands or info on one command if provided.',
    extended: '',
    usage: '<command name>',
    aliases: ['command', 'info', 'i'],
    guildOnly: false,
    developersOnly: false,
    args: false,
    category: 'Utility',
    execute(message, args) {
        const output = functions.newEmbed().setAuthor('Help Menu', message.author.avatarURL);

        if (!args.length) {
            const commands = {
                Utility: [],
                Mod: [],
                Misc: [],
                Dev: [],
                OwO: []
            };
            message.client.commands.forEach(command => {
                const category = commands[command.category] || commands.Misc;
                category.push(`\`${config.prefix}${command.name}\` - *${command.description}*`);
            });
            output
                .setTitle("Here's a list of all available commands!")
                .addField('Utility Commands', commands.Utility.join('\n'))
                .addField('Moderator Commands', commands.Mod.join('\n'))
                .addField('Miscellaneous Commands', commands.Misc.join('\n'))
                .addField('OwO Commands', commands.OwO.join('\n'))
                .setFooter(`Type ${config.prefix}help [command name] to get info on a specific command.`);
            return message.channel.send(output);
        }

        const name = args[0].toLowerCase();
        const command = message.client.commands.get(name) || message.client.commands.find(c => c.aliases && c.aliases.includes(name));
        if (!command)
            return message.reply('That\'s not a valid command!');

        const info = [
            `**Name:** \`${command.name}\``,
            `**Description:** \`${command.description ? command.description : '-'}\``,
            `**Extended:** \`${command.extended ? command.extended : '-'}\``,
            `**Usage:** \`${config.prefix}${command.name}${command.usage ? ' ' + command.usage : ''}\``,
            `**Aliases:** \`${command.aliases.length ? command.aliases.join(', ') : '-'}\``
        ];
        output.setAuthor(message.author.tag, message.author.avatarURL).setDescription(info.join('\n\n'));
        message.channel.send(output);
    },
};