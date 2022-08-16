const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unbanuser')
        .setDescription('Unbans a user from the server.')
        .addUserOption(option =>
            option.setName('id').setDescription('The user to unban.').setRequired(true)),
    async execute(interaction) {
       //  const id = interaction.options.get('target')?.value;
       //  const reason = interaction.options.getString('reason');
       // const userid = interaction.guild.members.unban(id);
       //  await interaction.reply(`${((interaction.client.users.fetch(id)).then(r => r))} has been unbanned.`);
        interaction.reply('This command is not yet implemented.');
    }
}
