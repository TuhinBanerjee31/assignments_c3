let cnt= 0

function counter1(){
    cnt++
    console.log(cnt)
    setTimeout(counter1, 1000)
}


counter1()