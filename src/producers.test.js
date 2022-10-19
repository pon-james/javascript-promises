
const {
    myPromise,
    myAsyncFunction,
    RESULT
  } = require("./producers");
const EXPECTED_RESULT = RESULT;

describe('myPromise', () => {
    test.skip('should return a promise', () => {
        const result = myPromise;
        expect(result).toBeInstanceOf(Promise);
    });

    test.skip('should resolve a value', () => {
        // this doesn't work
        const result = myPromise;
        expect(result).toEqual(EXPECTED_RESULT)
    })

    test('with await should resolve a value', async () => {
        const result = await myPromise;
        expect(result).toEqual(EXPECTED_RESULT)
    });
});

describe('myAsyncFunction', () => {
    test.skip('should return a promise', () => {
        const result = myAsyncFunction();
        expect(result).toBeInstanceOf(Promise);
    });

    test.skip('should resolve a value', () => {
        // this doesn't work
        const result = myAsyncFunction();
        expect(result).toEqual(EXPECTED_RESULT)
    })

    test('with await should resolve a value', async () => {
        const result = await myAsyncFunction();
        expect(result).toEqual(EXPECTED_RESULT)
    });

});
