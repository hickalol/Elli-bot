const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, () => {
  console.log('Ready!');
});


//-------------------the good stuff.---------------------


client.on("messageCreate",function(message) {
 if (message.author.bot) return;
  if (message.content === 'a'){
    message.channel.send("A");
  }
 if (message.content === 'eli') {
    message.channel.send("what is it sweetheart?");
  }
 if (message.author.bot)
   return;
  if (message.content === 'a'){
    message.channel.send("A");
  }
 if (message.author == client.user)
    return;
  if (message.author.bot) 
    return;
  if (message.content === 'do you love me') {
    const responses = ["*pets you gently* I do", "yes dummy", "*hugs you tightly* you know i do cutie", "cute", "mhm..", "mhm!", "you're too cute for me not to love you", "i LOVE you!<3", "I love you", "yes baka", "of course I do..", "mhm! I love you so much...", "*kisses you softly* i love you, my wittle girl~", "mhm.. what about you.. do you love me?", "yesh i do~<3", "I do... forever."];
    
   const randomResponse = responses[Math.floor(Math.random() * responses.length)]; 
    
   message.channel.send(randomResponse);
  }
 if (message.author == client.user)
    return; 
  if (message.author.bot)
    return;
  if (message.content === 'love me') {
    const responses = ["*scratches behind your ear* oh dummy, you know i love you", "I doo!", "*kisses your nose* dummy i do", "hmm...maybe~", "only you dum dum", "so what do I reply here? A. I love you, B. I love you or C. I keep teasing you in public, hehe!"];
    
   const randomResponse = responses[Math.floor(Math.random() * responses.length)]; 
    
   message.channel.send(randomResponse);
  }
 if (message.author == client.user)
    return;
  if (message.author.bot)
    return;
  if (message.content === 'only me?') {
    const responses = ["of course cutie", "only you", "*pets your head* only you dum dum", "only you... never gonna replace chu... *brings your hand up to my mouth and kisses it* my darling~", "only you! forever! i only love you and will only be with you!"]

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    message.channel.send(randomResponse);
  }
 if (message.author == client.user)
    return;
  if (message.author.bot)
    return;
  if (message.content === 'promise?') {
    const responses = ["of course cutie", "mhm!!", "*scratches behind your ear* i promise..", "pinkie promise baby"]

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    message.channel.send(randomResponse);
  }
 if (message.author.bot) return;
  if (message.content === 'owo') {
   message.channel.send('uwu');
  }
    if (message.content === 'uwu') {
   message.channel.send('owo');
  }
});


client.login(token);
