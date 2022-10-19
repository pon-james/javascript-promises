// Here are some examples from the field:


// Ref: https://github.com/pondigitalsolutions/bs_frontend/blob/main/src/api/api.js#L57-L61
/**
 * A simple wrapper to 'unwrap' a response, streight to body.
 *
 * @private
 * @param {response} requestObject A JSON type response
 * @returns {Object<string, any>} Returns the body of a response
 */
 async function resultHandler(requestObject) {
    return requestObject
        .then((response) => response.body)
    ;
  }

// Ref: https://github.com/pondigitalsolutions/bs_frontend/blob/c713bd4a77229d6db8a3eafda0d637901b75f591/src/api/api.js#L21-L28
/**
 * A function to fetch authentication token from the MSAL instance
 * using the idToken
 */
 async function getAccessToken() {
    return msalInstance.acquireTokenSilent({
      ...loginRequest,
    })
    .then((response) => {
      return response.idToken;
    });
  }
