var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;
var dataTotal = [];
var dataNum = 0;
var val = 0;
rl.on('line', function(line){
    n++;
    if (n === 0) {
        dataNum = line.split(' ')[0];
        val = line.split(' ')[1];
    } else {
        var num;
        var index = 0;
        dataTotal = line.split(' ');
        if (dataTotal.length !== dataNum) {
            throw new Error('数据错误')
        }
        // dataTotal.sort((a,b) => b-a);
        for (var i=index; i < dataTotal.length-index + 1; i++ ){
          if (Math.abs(dataTotal[index] - dataTotal[i]) === val) {
              num++;
          }
        }

        console.log(num);
    }
});
