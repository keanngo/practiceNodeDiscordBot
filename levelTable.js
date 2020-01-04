//module.exports = "Kean's leveling table, where array[1] = exp required from level 1->2, array[2] = 2->3 etc etc"

exports.hello = 'hello world';

const baseTable = 
{
    "1":{"expNeeded":0,"damage":10},
    "2":{"expNeeded":50,"damage":15},
    "3":{"expNeeded":100,"damage":25},
    "4":{"expNeeded":300,"damage":40},
    "5":{"expNeeded":1000,"damage":65},
    "6":{"expNeeded":5000,"damage":110},
    "7":{"expNeeded":10000,"damage":180},
    "8":{"expNeeded":20000,"damage":300},
    "9":{"expNeeded":35000,"damage":460},
    "10":{"expNeeded":60000,"damage":700},
    "11":{"expNeeded":100000, "damage:":1000}

}

exports.baseTable = baseTable
/*
exports.canLevel = (currExp, level) => {
    level = level.toString();
    return currExp >= baseTable[level]["expNeeded"] ? true : false;
} */

exports.canLevel = function (currExp, level) {
    level += 1;
    level = level.toString();
    if(currExp >= baseTable[level]["expNeeded"]){
        return true;
    }else{
        return false;
    }
}
exports.getExpNeeded = function (level) {
    level = level.toString();
    return baseTable[level]["expNeeded"];
}
exports.getDamage = function (level) {
    level = level.toString();
    return baseTable[level]["damage"];
}