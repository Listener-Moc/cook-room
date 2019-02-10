const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dataTotol = [];
rl.on('line', (line) => {
  dataTotol.push(line);
});

const dataNum1 = dataTotol.shift();
const sample1 = dataTotol.splice(0, dataNum1);
const dataNum2 = dataTotol.shift();
const sample2 = dataTotol.splice(0, dataNum2);
