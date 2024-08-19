const fs = require('fs')

fs.writeFile('sample.txt', "New Additions 2nd time", function(err) {console.log("write done")})
console.log("fs executed")

for(let i=0; i<10000; i++){

}

console.log("expensive done")