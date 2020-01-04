const fs = require("fs");

exports.run = (bot, message, args) => {
    fs.readFile('monsterAtt.json', 'utf-8', function(err, data){
        if(err) throw err;
        var monsterAttTable = JSON.parse(data);
        if(args.length == 0) return;
        if(monsterAttTable[args[0]] == null){
                fs.readFile('monster.json', 'utf-8', function(err, info){
                    if(err) throw err;
                    var monsterTable = JSON.parse(info);
                    chanceToHunt = monsterTable[args[0]]['chance'];
                    if(Math.random() <= chanceToHunt){
                    monsterAttTable[args[0]] = {};
                    monsterAttTable[args[0]]['health'] = monsterTable[args[0]]['health'];
                    monsterAttTable[args[0]]['experience'] = monsterTable[args[0]]['experience'];

                    fs.writeFile('monsterAtt.json', JSON.stringify(monsterAttTable), function(err) {
                        if(err) {
                            return console.log(err);
                        }
                        message.channel.send(`You found ${args[0]}! Type !attack [name] to attack!`);
                    });
                    }else{
                        message.channel.send(`Could not hunt for ${args[0]}, try again later!`);
                        return;
                    }
                });

        }
        else{
            message.channel.send("You are already hunting this monster!");
        }
            });
        }
