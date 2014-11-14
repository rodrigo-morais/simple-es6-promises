define(["exports"], function (exports) {
  "use strict";

  var promiseFunc = (function () {
    var _wait = function (number) {
      return new Promise(function (resolve, reject) {
        if (1 == number) {
          resolve("Stuff worked!");
        } else {
          reject(Error("It broke"));
        }
      });
    };

    return {
      wait: _wait
    };
  })();

  exports.default = promiseFunc;
});