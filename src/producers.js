/**
 * PROMISES
 ***********
 * A Promise object serves as a link between the executor (the “producing code”) and the consuming code,
 * which will receive the result or error.
 */

/**
 * When working with Promises there are two parts:
 * 1. Producing Code
 * 2. Consuming Code
 *
 * Promises have internal state
 * State:
 * - pending
 * - fulfilled (settled)
 * - rejected (settled)
 *
 */

const RESULT = { status: 'done' }

// Producing code

// The function passed to new Promise is called the executor.
// The executor fn receives two arguments: resolve and reject.
// These functions are pre-defined by the JavaScript engine, so we don’t need to create them.
// It contains the producing code which should eventually produce the result.
const myPromise = new Promise((resolve, reject) => {
    // the producing code
    setTimeout(() => {
        //  call the resolve function after a delay
        // calling resolve updates the Promise state
        return resolve(RESULT);
        //return reject(new Error('Something went wrong'));
    }, 1000);
});

// The word “async” before a function means one simple thing: a function always returns a promise
const myAsyncFunction = async () => {
    return RESULT;
    // we can also return a promise, which is the same result
    // return Promise.resolve(1)
}

module.exports = {
    myPromise,
    myAsyncFunction,
    RESULT
}
