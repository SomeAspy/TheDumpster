import { SlashCommandBuilder } from "discord.js";
export const data = new SlashCommandBuilder()
    .setName("example")
    .setDescription("Example command")
    .addStringOption((option) => option.setName("example").setDescription("Example command").setRequired(true))


export async function execute(interaction) {
    await interaction.reply(interaction.options.getString("example"));
}