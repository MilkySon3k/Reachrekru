const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = ".";
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
    if (message.channel.id === "744635392363462687") { //Bot działa tylko na tym kanale co id dasz
        if (message.author.bot) return;
            var command = message.content
            .toLowerCase()
            .slice(prefix.length)
            .split(" ")[0];

    if (command === "autor") {
        message.channel.send("Autorem jest MilkSon");
        }

    if (command === "generuj") {
        if (generated.has(message.author.id)) {
            message.channel.send(
            "Poczekaj chwile. - " +
            message.author
            );
            } else {
                let messageArray = message.content.split(" ");
                let args = messageArray.slice(1);
                if (!args[0])
                    return message.reply("Proszę określić żądaną usługę!");
                var fs = require("fs");
                const filePath = __dirname + "/" + args[0] + ".txt";
                fs.readFile(filePath, function (err, data) {
                    if (!err) {
                        data = data.toString();
                        var position = data.toString().indexOf("\n");
                        var firstLine = data.split("\n")[0];
                        message.author.send(firstLine);
                        if (position != -1) {
                            data = data.substr(position + 1);
                            fs.writeFile(filePath, data, function (err) {
                                const embed = {
                                    title: "Konto wygenerowane!",
                                    description: "Sprawdź swoje dm, aby uzyskać informacje o koncie!",
                                    color: 8519796,
                                    timestamp: "2019-04-04T14:16:26.398Z",
                                    footer: {
                                        icon_url:
                                            "https://cdn.discordapp.com/avatars/530778425540083723/7a05e4dd16825d47b6cdfb02b92d26a5.png",
                                        text: "Kup boty od MilkSon#0863"
                                    },
                                    thumbnail: {
                                        url:
                                            "http://www.compartosanita.it/wp-content/uploads/2019/02/right.png"
                                    },
                                    author: {
                                        name: "Generator konta",
                                        url: "https://discordapp.com",
                                        icon_url: bot.displayAvatarURL
                                    },
                                    fields: []
                                };
                                message.channel.send({ embed });
                                generated.add(message.author.id);
                                setTimeout(() => {
                                    // Removes the user from the set after a minute
                                    generated.delete(message.author.id);
                                }, 10);
                                if (err) {
                                    console.log(err);
                                }
                            });
                        } else {
                            message.channel.send(
                                "Przepraszamy, dla tej usługi nie jest dostępne żadne konto!"
                            );
                        }
                    } else {
                        message.channel.send(
                            "Przepraszamy, ta usługa nie istnieje w naszej bazie danych"
                        );
                    }
                });
            }
        }
        else
            if (command === "staty") {
                message.channel.send(`Całkowita liczba użytkowników: ${bot.users.size}`)
            }

     if (command === "add") {
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("Przepraszamy, nie możesz tego zrobić, nie jesteś administratorem!");
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            var account = args[0]
            var service = args[1]
            const filePath = __dirname + "/" + args[1] + ".txt";
            fs.appendFile(filePath, os.EOL + args[0], function (err) {
                if (err) return console.log(err);
                message.channel.send("Gotowe!")
            });


        }
        if (command === "create") {
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("Przepraszamy, nie możesz tego zrobić, nie jesteś administratorem!");
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            const filePath = __dirname + "/" + args[0] + ".txt";
            fs.writeFile(filePath, 'first:first', function (err) {
                if (err) throw err;
                message.channel.send("Gotowe!")
            });
        }
       if (command === "restock") {
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("Przepraszamy, nie możesz tego zrobić, nie jesteś administratorem!");
            if (!args[0])
                return message.reply(
                    "Określ usługę, którą chcesz uzupełnić!"
                );
            message.channel.send(
                "@everyone " +
                "**" +
                args[0] +
                "**" +
                " został uzupełniony przez " +
                "<@" +
                message.author.id +
                ">"
            );
        }
    }
});

bot.login("Tutaj Token");
