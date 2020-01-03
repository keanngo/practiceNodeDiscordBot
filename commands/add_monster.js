const fs = require("fs");

exports.run = (bot, message, args) => {
    fs.readFile('monster.json', 'utf-8', function(err, data){
        if (err) throw err
        var monsterTable = JSON.parse(data);
        console.log(args.length);
        if(args.length < 3){
            message.channel.send("Must have atleast 3 arguments (Name, Health, Level)");
            return;
        }
        console.log(isNan(args[1]));
        if(monsterTable[args[0]] == undefined){
            monsterTable[args[0]] = {};
            monsterTable[args[0]]['health'] = args[1];
            monsterTable[args[0]]['exp'] = args[2];
            message.channel.send(args[0] + " has been added to the monster file").catch(console.error);
        }else{
            message.channel.send("Monster already inside table");
        }
        fs.writeFile('monster.json', JSON.stringify(monsterTable), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    });
}