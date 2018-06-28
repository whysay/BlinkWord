
module.exports = {
    readTextFile : function readTextFile(file, callback) {
        var fs = require("fs");
        console.log("\n *START* \n");
        var contents = fs.readFileSync("test.json");
        callback(contents);
        //var jsonContent = JSON.parse(contents);
    }
}