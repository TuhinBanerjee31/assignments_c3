/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    // console.log("resolve function started")
    return new Promise(resolve => setTimeout(resolve,n))
}

// wait(3000).then(() => console.log("resolve function done"))
// console.log("file end")

module.exports = wait;
