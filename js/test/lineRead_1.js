var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let dataTotol = [];
rl.on('line', function(line) {
    dataTotol.push(line);
})

let dataNum1 = dataTotol.shift();
let sample1 = dataTotol.splice(0,dataNum1);
let dataNum2 = dataTotol.shift();
let sample2 = dataTotol.splice(0,dataNum2);