//Reading a file using JSON

 const fs = require("fs");
        
function loadJSON(filename = ''){
    return JSON.parse(
    fs.existsSync(filename)?fs.readFileSync('data.json').toString():'null'
    )
}
    console.log(loadJSON('data.json')
    );











