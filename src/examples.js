const { myPromise } = require("./producers");

async function getDataFromApi(ok = true) {
  // handle first promise
  const firstPromise = await myPromise;
  // handle second promise
  try {
    const result = await myPromise;
    if (!ok) {
      return Promise.reject("Yikes, there was an error");
    }
    return result;
  } catch (error) {
    // handle the error
  }
}

module.exports = {
  getDataFromApi,
};
