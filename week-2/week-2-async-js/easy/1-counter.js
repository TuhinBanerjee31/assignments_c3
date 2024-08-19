let cnt= 0

function count(){
    cnt++
    console.log(cnt)
}

//setInterval keeps on calling the function after the specified time
function counter1(){
    setInterval(count, 1000)
}


counter1()