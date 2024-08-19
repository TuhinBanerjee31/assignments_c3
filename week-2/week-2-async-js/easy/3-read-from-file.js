const fs = require('fs')

fs.readFile('sample.txt', 'utf-8', function(err, data){
    console.log(data)
})
console.log("File read executed")


for(let i=0; i<100000; i++){

}
console.log("expensive operation done")