fs = require("fs");
table = require("../levelTable.js");

exports.run = (bot, message, args) => {
    fs.readFile('exp.json', 'utf-8', function(err, data){
        if (err) throw err
        var expTable = JSON.parse(data);

        if(expTable[message.author.id] == undefined){
            message.channel.send("Add yourself into the table with !add");
            return;
        }

        if(table.canLevel(expTable[message.author.id]["experience"], expTable[message.author.id]["level"])){
            nextLevel = expTable[message.author.id]["level"] + 1;
            message.channel.send(`You have leveled from level ${expTable[message.author.id]["level"]} to ${nextLevel}!`);
            expTable[message.author.id]['damage'] = table.getDamage(nextLevel);
            expTable[message.author.id]['level'] = nextLevel;
            message.channel.send(`Your new damage is: ${table.getDamage(nextLevel)}`);
        }else{
            nextLevel = expTable[message.author.id]["level"] + 1;
            expNeeded = table.getExpNeeded(nextLevel) - expTable[message.author.id]["experience"];
            message.channel.send("You still need "+expNeeded+ " exp to level!");
            return
        }
        fs.writeFile('exp.json', JSON.stringify(expTable), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    });
}