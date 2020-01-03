const fs = require("fs");

exports.run = (bot, message, args) => {

fs.readFile('monsterAtt.json', 'utf-8', function(err, data){
    if(err) throw err;
    var monsterAttTable = JSON.parse(data);

    if(monsterAttTable[args[0]] == undefined){
        message.channel.send(`${args[0]} is not currently being hunted! Type '!hunt ${args[0]}' for a chance to encounter the monster!`);
        return;
    }else{
        fs.readFile('exp.json', 'utf-8', function(err, d){
            if (err) throw err;
            var expTable = JSON.parse(d);
            if(expTable[message.author.id] == undefined){
                message.channel.send("Please use the command !add to add yourself to the exp table!");
                return;
            }
            damage = expTable[message.author.id]['damage'];
            oldHealth = monsterAttTable[args[0]]['health'];
            newHealth = oldHealth - damage;
            monsterAttTable[args[0]]['health'] = newHealth;

            if(newHealth <= 0 ){
                    prevExp = expTable[message.author.id]['experience'];
                    expGain = prevExp + monsterAttTable[args[0]]['experience'];
                    expTable[message.author.id]['experience'] += expGain;
                    fs.writeFile('exp.json', JSON.stringify(expTable), function(err) {
                        if(err) {
                            return console.log(err);
                        }
                        console.log("The exp file was saved!");
                    message.channel.send(`${args[0]} has been defeated! ${monsterAttTable[args[0]]['experience']} exp has been gained!`);
                    delete monsterAttTable[args[0]];
        
                    fs.writeFile('monsterAtt.json', JSON.stringify(monsterAttTable), function(err) {
                        if(err) {
                            return console.log(err);
                        }
                        console.log("The file was saved!");
                    });
            });
        
            }else{
                message.channel.send(`You dealt ${damage} to ${args[0]}, leaving it at ${newHealth}`);
        
                fs.writeFile('monsterAtt.json', JSON.stringify(monsterAttTable), function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
                });
            }
        });
    }
});
}