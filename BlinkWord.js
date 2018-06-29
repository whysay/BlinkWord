
module.exports = {
    readTextFile : function readTextFile(file, callback) {
        var fs = require("fs");
        //console.log("\n *START* \n");
        const path = require("path");
        const contents = fs.readFileSync(path.resolve(__dirname, "./test.json"));
        callback(contents);
        //var jsonContent = JSON.parse(contents);
    }
}