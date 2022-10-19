const { myPromise, myAsyncFunction } = require('./producers');

// Consuming code examples

// Consuming functions can be registered (subscribed) using the methods .then and .catch.
// The most important, fundamental one is .then()
// The first argument of .then() is a function that runs when the promise is resolved and receives the result
// The second argument of .then() is a function that runs when the promise is rejected and receives the error.
const implementationOne = () => {
    return myPromise.then((result) => {
        console.log('fulfilled (settled)')
        return result
    }, (error) => {
        console.log('rejected (settled)')
        return error
    });
}

// If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction).
//  Or we can use .catch(errorHandlingFunction), which is exactly the same:
const implementationTwo = () => {
    return myPromise.then((result) => {
        console.log('fulfilled (settled)')
        return result
    }).catch((error) => {
        console.log('rejected (settled)')
        return error
    });
}

// The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.
// A finally handler has no arguments. In finally we don’t know whether the promise is successful or not.
// A finally handler “passes through” the result or error to the next suitable handler.
// A finally handler also shouldn’t return anything. If it does, the returned value is silently ignored.
// When finally throws an error, then the execution goes to the nearest error handler.

const implementationThree = () => {
    return myPromise.then((result) => {
        console.log('fulfilled (settled)')
        return result
    }).catch((error) => {
        console.log('rejected (settled)')
        return error
    }).finally(() => {
        console.log('Promise ready')
        // clean up. finalizing
    });
}

const implementationFour = () => {
    return myPromise.finally(() => { // triggers first
        console.log('Promise ready')
        // clean up. finalizing
    }).then((result) => {
        console.log('fulfilled (settled)')
        return result
    });
}

const implementationFive = () => {
    // myAsyncFunction returns a Promise so we can consume it
    return myAsyncFunction().then((result) => {
        console.log('fulfilled (settled)')
        return result
    });
}

// They keyword await only works inside async functions
// It makes JavaScript wait until that promise settles and returns its result.
const implementationSix = async () => {
    console.log('running')
    // The function execution “pauses” here
    const result = await myPromise;
    // and resumes when the promise settles
    console.log('fulfilled (settled)')
    // That doesn’t cost any CPU resources,
    // because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.
}

// error handling
const implementationSeven = async () => {
    console.log('running')
    try {
        const result = await myPromise;
        console.log('fulfilled (settled)')
    } catch (error) {
        // handle error
        console.log('rejected (settled)')
    }
}

// When we use async/await, we rarely need .then, because await handles the waiting for us.
// And we can use a regular try..catch instead of .catch. That’s usually (but not always) more convenient.
// But when we’re outside any async function, we’re syntactically unable to use await
// and there then() should be used.

module.exports = {
    implementationOne,
    implementationTwo,
    implementationThree,
    implementationFour,
    implementationFive,
    implementationSix,
    implementationSeven
}
