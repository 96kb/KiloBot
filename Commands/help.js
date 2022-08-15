const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Commands And Help'),
    async execute(interaction) {
        const button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    // .setCustomId('github')
                    .setLabel('Learn More!')
                    .setURL('https://github.com/96kb')
                    .setStyle(ButtonStyle.Link)
                    .setEmoji('🧠'),
                new ButtonBuilder()
                    .setLabel('View My Code!')
                    .setURL('https://github.com/96kb/KiloBot')
                    .setStyle(ButtonStyle.Link)
                    .setEmoji('🧑‍💻'),
                new ButtonBuilder()
                    .setLabel('Invite me to your server!')
                    .setURL('https://discord.com/api/oauth2/authorize?client_id=1008811174801977494&permissions=2147534912&scope=bot%20applications.commands')
                    .setStyle(ButtonStyle.Link)
                    .setEmoji('🔗'))
        const Embed = new EmbedBuilder()
            .setTitle('Commands And Help')
            .setDescription('Here you can find useful information about the bot, as well as the commands that you can use.')
            .setFooter({ text: 'Made by 96kb', iconURL: 'https://cdn.discordapp.com/avatars/236830231367778304/f86361e610c33e7479112877160135a4.png' })
            .setColor('#2551F0')
            .setThumbnail('https://cdn.discordapp.com/avatars/236830231367778304/f86361e610c33e7479112877160135a4.png?size=2048')
            .setAuthor({ name: 'KiloBot', iconURL: 'https://cdn.discordapp.com/avatars/236830231367778304/f86361e610c33e7479112877160135a4.png' })
            .addFields(
                { name: '`/help`', value: 'Displays this message.' },
                { name: '`/ping`', value: 'Pong!' },
                { name: '`/aboutme`', value: 'Shows information about both me and the bot.' },
                { name: '`/translate`', value: 'Translates any phrase/text of your choosing.' },
                { name: '`/findlyric`', value: 'Finds the lyrics of any song, using the song name and artist' })
            await interaction.reply({ content: '', embeds: [Embed], components: [button] });
    }
}