const fs = require('node:fs');
const { Client, Collection, Intents, MessageActionRow, MessageButton } = require('discord.js');
const { token, clientId, guildId } = require('./config.json');
const { sheHerId, sheTheyId, heHimId, heTheyId, theyThemId, theySheId, theyHeId, anyPronounsId } = require('./variables.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// Console confirmation
client.once('ready', () => {
	console.log('Ready!');
});

// Command handler
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		return command.execute(interaction);
	} catch (error) {
		console.error(error);
		return await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// Assign pronouns role to user
client.on('interactionCreate', async interaction => {
	if (!interaction.isButton()) return;
	
	const userRoles = interaction.member.roles.cache;
	
	switch (interaction.customId) {
		case 'She / Her': 
			if (userRoles.get(sheHerId)) {
				
				interaction.member.roles.remove(sheHerId); 
				await interaction.reply({ content: `Has deseleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			}
			else { 
				
				interaction.member.roles.add(sheHerId); 
				await interaction.reply({ content: `Has seleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			} break;
		case 'She / They':
			if (userRoles.get(sheTheyId)) {
				
				interaction.member.roles.remove(sheTheyId); 
				await interaction.reply({ content: `Has deseleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			}
			else { 
				
				interaction.member.roles.add(sheTheyId); 
				await interaction.reply({ content: `Has seleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			} break;
		case 'He / Him': 
			if (userRoles.get(heHimId)) {
				
				interaction.member.roles.remove(heHimId); 
				await interaction.reply({ content: `Has deseleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			}
			else { 
				
				interaction.member.roles.add(heHimId); 
				await interaction.reply({ content: `Has seleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			} break;
		case 'He / They': 
			if (userRoles.get(heTheyId)) {
				
				interaction.member.roles.remove(heTheyId); 
				await interaction.reply({ content: `Has deseleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			}
			else { 
				
				interaction.member.roles.add(heTheyId); 
				await interaction.reply({ content: `Has seleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			} break;
		case 'They / Them': 
			if (userRoles.get(theyThemId)) {
				
				interaction.member.roles.remove(theyThemId); 
				await interaction.reply({ content: `Has deseleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			}
			else { 
				
				interaction.member.roles.add(theyThemId); 
				await interaction.reply({ content: `Has seleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			} break;
		case 'They / She': 
			if (userRoles.get(theySheId)) {
				
				interaction.member.roles.remove(theySheId); 
				await interaction.reply({ content: `Has deseleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			}
			else { 
				
				interaction.member.roles.add(theySheId); 
				await interaction.reply({ content: `Has seleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			} break;
		case 'They / He': 
			if (userRoles.get(theyHeId)) {
				
				interaction.member.roles.remove(theyHeId); 
				await interaction.reply({ content: `Has deseleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			}
			else { 
				
				interaction.member.roles.add(theyHeId); 
				await interaction.reply({ content: `Has seleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			} break;
		case 'Any Pronouns': 
			if (userRoles.get(anyPronounsId)) {
				
				interaction.member.roles.remove(anyPronounsId); 
				await interaction.reply({ content: `Has deseleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			}
			else { 
				
				interaction.member.roles.add(anyPronounsId); 
				await interaction.reply({ content: `Has seleccionado los pronombres ${interaction.customId}`, ephemeral: true});
				
			} break;		
	}
});

client.login(token);
