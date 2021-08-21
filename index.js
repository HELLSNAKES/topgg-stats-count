const Discord = require("discord.js");
const client = new Discord.Client();
const express = require('express');
const app = express();
const { AutoPoster } = require('topgg-autoposter')

const poster = AutoPoster('topggtoken', client) 
poster.on('posted', (stats) => { 
  console.log(`Posted stats to Top.gg | ${stats.serverCount} servers`)
})

app.listen(3000, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Connect http://localhost:3000`)
}) 
client.login('discordbottoken');

