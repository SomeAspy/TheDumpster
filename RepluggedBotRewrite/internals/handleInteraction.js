export async function handleInteraction(interaction, cli, slashCommands) {
    if (interaction.isCommand()) {
        try {
            slashCommands.get(interaction.commandName).execute(interaction, cli);
            if (debug) {
                console.log(`[Slash Command Handler]: Executed slash command ${interaction.commandName}`);
            }
        } catch (err) {
            console.error(err);
        }
    }
}