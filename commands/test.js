const fs = require("fs");

function readContent(filename, callback){
    fs.readFile(filename, function (err, content){
        if (err) return callback(err)
        content = JSON.parse(content);
        //null is the place where err should be
        callback(null, content);
    })
}

readContent('monster.json', function (err, content) {
    console.log(content);
})