'use strict';

/**
  * @module callback or promise
  */

module.exports = function promiseOrCallback(promise, callback) {

  if (!callback) {

    return promise;
  } else {

    promise.then(function(result) {

      callback(null, result);
    })
    .catch(callback);
  }
}
