const Discord = require("discord.js");
const bot = new Discord.Client();

const Zrekrutowany = '';

var fs = require("fs");
var lineReader = require("line-reader");
var async = require("async");
const firstline = require("firstline");
const generated = new Set();
var os = require("os");
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
//For avoidong Heroku $PORT error
app.get('/', function (request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
});

bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", message => {
    if (message.content === "$zrekrutowany') {
        message.mention.members.first.addRole(Zrekrutowany);

    if (command === "autor") {
        message.channel.send("Autorem jest MilkSon");
        }
            );
        }
    }
});

bot.login("Tutaj Token");
