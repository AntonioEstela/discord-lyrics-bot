const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready pa partir jetas!');
});

client.login(token);

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!args.length) {
        return message.channel.send(`No pusiste ningun argumento pedazo de marica ${message.author}`)
    }

    message.channel.send(`Toma tus putos argumentos = ${args}`);
    message.channel.send(`Y tambien tu asqueroso comando = ${command}`);

})