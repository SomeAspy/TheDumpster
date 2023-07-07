import { readdirSync } from 'fs';

/** The data for all slash commands
 * @type {Array<Object>}
 */
export const slashCommandData = [];

/** The slash commands
 * @type {Map<string, Object>}
 */
export const slashCommands = new Map();

/** Indexes all slash commands
 * @returns {Promise<void>} Nothing
 * @async
 */
export async function indexSlashCommands() {
    const commandFiles = readdirSync('./src/commands/').filter(file => file.endsWith('.js') && file.startsWith('slash.'));
    for (const file of commandFiles) {
        try {
            console.log(`[Slash Command Indexer]: Found Slash Command: ${file}`);
            const command = await import(`../commands/${file}`);
            slashCommandData.push(command.data);
            slashCommands.set(command.data.name, command);
        } catch (error) {
            console.error(`[Slash Command Indexer]: Failed to load Slash Command: ${file}\n${error}`);
            slashCommandData.splice(slashCommandData.indexOf(file.data), 1);
        }
    }
}
