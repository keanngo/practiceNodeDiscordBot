const fs = require("fs");

exports.run = (bot, message, args) => {
    fs.readFile('monster.json', 'utf-8', function(err, data){
        if (err) throw err
        var monsterTable = JSON.parse(data);
        for(x in monsterTable){
            message.channel.send(`name: ${x}, health: ${monsterTable[x]['health']}, experience: ${monsterTable[x]['experience']}, chance: ${monsterTable[x]['chance']}`);
        }
    });
}