let promise = new Promise((resolve, reject) => {
    let a = 1 + 1 // = se usa para asignar variables / cosas a otras //
    if(a == 2) { // == se usa para funciones matematicas //
        resolve('Promise Fulfilled')
    } else {
        reject('Promise not fulfilled')
    }
})

promise.then((message) => {
    console.log(message + ', promise has passed!')

}).catch((message) => {
    console.log(message + ', promise has failed')
})