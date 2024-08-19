const fs = require('fs')

fs.readFile('sample2.txt', 'utf-8', function(err,data){
    let newData= data.replace(/\s+/g, " ")
    
    fs.writeFile('sample2.txt', newData, function(err) {console.log("updated successfully")})
})