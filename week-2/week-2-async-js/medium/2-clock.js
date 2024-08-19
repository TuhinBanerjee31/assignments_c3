function counter1(){
    let d = new Date()
    console.log(d.toLocaleTimeString())
    setTimeout(counter1, 1000)
}


counter1()