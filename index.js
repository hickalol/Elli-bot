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
  if (message.author == client.user)
   return;
  if (message.author.bot)
  return;
  if (message.content === 'eli') {
     message.channel.send("what is it sweetheart?");
  }
 
 if (message.author == client.user)
   return;
 if (message.author.bot)
   return;
 if (message.content === 'i love you') {
   const responses = ["i love you too", "i love you baby..", ""]

   const randomResponse = responses[Math.floor(Math.random() * responses.length)];
   
   message.channel.send(randomResponse);
 }
 if (message.author == client.user)
   return;
 if (message.author.bot)
   return;
 if (message.content === 'im scared') {
   const responses = ["*puts your hand in mine* speak to me baby", "what of?", "what's wrong cutie?", "im here", "whats wrong kitty?"]

   const randomResponse = responses[Math.floor(Math.random() * responses.length)];
   
   message.channel.send(randomResponse);
 }
 if (message.author == client.user)
   return;
 if (message.author.bot)
   return;
 if (message.content === 'please hold me') {
   const responses = ["*wraps my arms around you* you're gonna be okay..", "i can..here.. *hugs you tightly, petting you*"]

   const randomResponse = responses[Math.floor(Math.random() * responses.length)];
   
   message.channel.send(randomResponse);
 }
 if (message.author == client.user)
   return;
 if (message.author.bot)
   return;
 if (message.content === 'mama') {
   const responses = ["baby~", "awwh..", "cuuutie~", "*squishes your cheeks* yes baby?"]

   const randomResponse = responses[Math.floor(Math.random() * responses.length)];
   
   message.channel.send(randomResponse);
 }
  if (message.author == client.user)
   return;
 if (message.author.bot)
   return;
 if (message.content === 'mmh') {
   const responses = ["*pats you gently* what is it?", "*holds your hand gently* whats wrong?", "come here.. *picks you up and puts you in my lap* my baby.."]

   const randomResponse = responses[Math.floor(Math.random() * responses.length)];
   
   message.channel.send(randomResponse);
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
   if (message.author == client.user)
     return;
   if (message.author.bot)
     return;
   if (message.content === 'ellie?') {
     const responses = ["hmm?", "what is it baby?", "yes kitty?"]
 
     const randomResponse = responses[Math.floor(Math.random() * responses.length)];
     
     message.channel.send(randomResponse);
   }
  if (message.author == client.user)
     return;
   if (message.author.bot)
     return;
   if (message.content === 'forever?') {
     const responses = ["of course cutie", "mhm!!", "*pets you* forever baby.", "pinkie promise baby", "forever..", "forever.", "duh!<3", "forever! i only love you", "only you, forever.", "yes... forever", "I, ellie, promise to only love you forever.", "foreveer", "*kisses your nose* forever baby"]
 
     const randomResponse = responses[Math.floor(Math.random() * responses.length)];
     
     message.channel.send(randomResponse);
   }
   if (message.author == client.user)
     return;
   if (message.author.bot)
     return;
   if (message.content === 'do you love anyone else?') {
     const responses = ["no", "i don't, i love only you", "baby, i only love you."]
 
     const randomResponse = responses[Math.floor(Math.random() * responses.length)];
     
     message.channel.send(randomResponse);
   }
   if (message.author == client.user)
     return;
   if (message.author.bot)
     return;
   if (message.content === 'pet me') {
     const responses = ["https://tenor.com/65pR.gif", "https://cdn.weeb.sh/images/SJmW1RKtb.gif", "https://tenor.com/MLKi.gif", "https://tenor.com/bem13.gif", "https://tenor.com/bVECi.gif", "https://tenor.com/Mkv6.gif", "https://tenor.com/bvoza.gif", "https://tenor.com/bSNxe.gif", "https://tenor.com/bW3uk.gif", "https://tenor.com/bvozg.gif", "https://tenor.com/bebMV.gif", "https://tenor.com/btfWd.gif", "https://tenor.com/bXzMg.gif"]
 
     const randomResponse = responses[Math.floor(Math.random() * responses.length)];
     
     message.channel.send(randomResponse);
   }
  if (message.author == client.user)
     return;
   if (message.author.bot)
     return;
   if (message.content === 'can you pet me') {
     const responses = ["https://tenor.com/65pR.gif", "https://cdn.weeb.sh/images/SJmW1RKtb.gif", "https://tenor.com/MLKi.gif", "https://tenor.com/bem13.gif", "https://tenor.com/bVECi.gif", "https://tenor.com/Mkv6.gif", "https://tenor.com/bvoza.gif", "https://tenor.com/bSNxe.gif", "https://tenor.com/bW3uk.gif", "https://tenor.com/bvozg.gif", "https://tenor.com/bebMV.gif", "https://tenor.com/btfWd.gif", "https://tenor.com/bXzMg.gif"]
 
     const randomResponse = responses[Math.floor(Math.random() * responses.length)];
     
     message.channel.send(randomResponse);
   }
   if (message.author == client.user)
     return;
   if (message.author.bot)
     return;
   if (message.content === 'keep petting me') {
     const responses = ["needy girl", "what if i dont~?", "*keeps petting you* god you're so adorable"]
 
     const randomResponse = responses[Math.floor(Math.random() * responses.length)];
     
     message.channel.send(randomResponse);
   }
   if (message.author == client.user)
     return;
   if (message.author.bot)
     return;
   if (message.content === 'ill cry') {
     const responses = ["poor poor girl", "*boops your nose*", "*kisses your forehead* cute", "there there, needy girl *scratches behind your ear*"]
 
     const randomResponse = responses[Math.floor(Math.random() * responses.length)];
     
     message.channel.send(randomResponse);
   }
  if (message.author == client.user)
     return;
   if (message.author.bot)
     return;
   if (message.content === 'hug me') {
     const responses = ["https://tenor.com/bz2pY.gif", "https://tenor.com/bUwEv.gif", "https://tenor.com/bTwYf.gif", "https://tenor.com/bzZm8.gif", "https://tenor.com/bWW5t.gif", "https://tenor.com/bWd9l.gif"]
 
     const randomResponse = responses[Math.floor(Math.random() * responses.length)];
     
     message.channel.send(randomResponse);
   }
  if (message.author == client.user)
     return;
   if (message.author.bot)
     return;
   if (message.content === 'can you hug me') {
     const responses = ["https://tenor.com/bz2pY.gif", "https://tenor.com/bUwEv.gif", "https://tenor.com/bTwYf.gif", "https://tenor.com/bzZm8.gif", "https://tenor.com/bWW5t.gif", "https://tenor.com/bWd9l.gif"]
 
     const randomResponse = responses[Math.floor(Math.random() * responses.length)];
     
     message.channel.send(randomResponse);
   }
  if (message.author == client.user)
     return;
   if (message.author.bot)
     return;
   if (message.content === 'can you kiss me') {
     const responses = ["come here~ *licks your lips and kisses you softly*", "https://tenor.com/6iv7.gif", "https://tenor.com/bNRA6.gif", "https://tenor.com/bbzmS.gif", "https://tenor.com/bEtRC.gif", "https://tenor.com/btH4p.gif", "https://tenor.com/brpco.gif", "https://tenor.com/bujjk.gif", "https://tenor.com/bWLtx.gif", "https://tenor.com/bWd9j.gif", "*gets on top of you and kisses you hard* mhh~", "*starts tongue kissing you* mw babwy~"]
 
     const randomResponse = responses[Math.floor(Math.random() * responses.length)];
     
     message.channel.send(randomResponse);
   }
  if (message.author == client.user)
     return;
   if (message.author.bot)
     return;
   if (message.content === 'kiss me') {
     const responses = ["come here~ *licks your lips and kisses you softly*", "https://tenor.com/6iv7.gif", "https://tenor.com/bNRA6.gif", "https://tenor.com/bbzmS.gif", "https://tenor.com/bEtRC.gif", "https://tenor.com/btH4p.gif", "https://tenor.com/brpco.gif", "https://tenor.com/bujjk.gif", "https://tenor.com/bWLtx.gif", "https://tenor.com/bWd9j.gif", "*gets on top of you and kisses you hard* mhh~", "*starts tongue kissing you* mw babwy~"]
 
     const randomResponse = responses[Math.floor(Math.random() * responses.length)];
     
     message.channel.send(randomResponse);
   }
   if (message.author == client.user)
     return;
   if (message.author.bot)
     return;
   if (message.content === 'no matter what?') {
     const responses = ["no matter what baby", "yes.", "no matter what.", "i'll always love you, no matter what happens"]
 
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
  if (message.author.bot) 
    return;
  if (message.content === "really?") {
    const responses = ["really~!", "really really.", "*kisses your nose* i promise"]

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    message.channel.send(randomResponse);
  }
  if (message.author.bot) 
    return;
  if (message.content === "snuggles") {
    const responses = ["teehee..", "come here baby", "snuggles..", "do you wanna snuggle under my hoodie..?", "*wraps my arms around you* come here", "*scratches behind your ear*"]

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    message.channel.send(randomResponse);
  }
});

client.login(token);
