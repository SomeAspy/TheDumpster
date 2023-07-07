import { slashCommandData } from '../internals/indexSlashCommands.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { config } from 'dotenv';
import { getBase } from './JSON.js';
config();

const guildID = await getBase("devServer");
const clientID = await getBase("botID");
const devMode = await getBase("devMode");

const restAPI = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
export async function pushCommands() {
    try {
        console.log(
            `Attempting to push ${slashCommandData.length} commands to Discord API...`,
        );
        if (devMode) {
            console.log('Pushing commands to guild...'.magenta);
            await restAPI.put(
                Routes.applicationGuildCommands(clientID, guildID),
                { body: slashCommandData },
            );
        } else {
            console.log(
                'Running in production mode.\nPushing commands to bot globally...',
            );
            await restAPI.put(Routes.applicationCommands(clientID), {
                body: slashCommandData,
            });
        }
        console.log(
            `Successfully pushed ${slashCommandData.length} commands to Discord API!`,
        );
    } catch (e) {
        console.error(e);
    }
}