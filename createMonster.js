/*fs = require("fs");

class Monster {
    constructor(name, health, exp) {
        this.name = name;
        this.health = health;
        this.exp = exp;
    };

}
fs.readFile('monster.json', 'utf-8', function(err, data){
    if (err) throw err
    var monsterTable = JSON.parse(data);
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

module.exports = Monster;*/