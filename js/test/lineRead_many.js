const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let n = -1;
let dataTotal = [];
let dataNum = 0;
let val = 0;
rl.on('line', (line) => {
  n++;
  if (n === 0) {
    dataNum = line.split(' ')[0];
    val = line.split(' ')[1];
  } else {
    let num;
    const index = 0;
    dataTotal = line.split(' ');
    if (dataTotal.length !== dataNum) {
      throw new Error('数据错误');
    }
    // dataTotal.sort((a,b) => b-a);
    for (let i = index; i < dataTotal.length - index + 1; i++) {
      if (Math.abs(dataTotal[index] - dataTotal[i]) === val) {
        num++;
      }
    }

    console.log(num);
  }
});
