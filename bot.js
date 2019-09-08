const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'bacon') {

       message.reply('hair');

       }

});

 

//

client.login(process.env.NjIwMDYwOTgwNDQwODU4NjI2.XXRUCQ.5cn_stM0QZwi-vga9UY-ABOvzss);//
