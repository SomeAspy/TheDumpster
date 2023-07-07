// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import{SlashCommandBuilder}from'@discordjs/builders';
export const data=new SlashCommandBuilder()
	.setName('test')
	.setDescription('A test command.')
	.setDefaultPermission(false);
export async function execute(interaction):Promise<void>{
	interaction.reply('Test command executed.');
};
