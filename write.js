//Writing a file using CSV

const fs = require("fs");

const csv = require("fast-csv");

const ws = fs.createWriteStream('my.csv');


csv.write([
    ["FirstName","Gurpreet"],
    ["LastName", "Kaur"],
    ["Text","Writing a File"]
], {headers:true})
    .pipe(ws);





