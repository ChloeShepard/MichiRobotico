const fs = require('node:fs');
const { Client, Collection, Intents, MessageActionRow, MessageButton } = require('discord.js');
const { token, clientId, guildId } = require('./config.json');
const { sheHerId, sheTheyId, heHimId, heTheyId, theyThemId, theySheId, theyHeId, anyPronounsId } = require('./variables.json');

// const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

// Import relevant classes from discord.js
//const { Client, Intents, Collection, MessageActionRow, MessageButton } = require('discord.js');

// Instantiate a new client with some necessary parameters.
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//console.log(client);
//console.log("\n\n" + client.users);

//const michi = client.users.fetch('950699356313505802');
//michi.setUsername('Michi Supremo');

client.commands = new Collection();
// const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
	// commands.push(command.data.toJSON());
}

/*

for (const file of eventFiles) {
	const event = require('./events/${file}');
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
*/

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	// console.log(client.commands)
	// console.log(interaction)
	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		return command.execute(interaction);
	} catch (error) {
		console.error(error);
		return await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

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

/*
client.on('interactionCreate', interaction => {
	(async() => {
		console.log('before start');
		
		if (!interaction.isCommand()) return;
		console.log(commands[0].name);
		
		if (interaction.commandName === 'ping') {
			await interaction.reply('Pong!');
		}
		  
		console.log('after start');
	})();
});;
*/

client.login(token);