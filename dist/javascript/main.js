define(["exports", "javascript/promise"], function (exports, _javascriptPromise) {
  "use strict";

  var promiseFunc = _javascriptPromise.default;


  var main = (function () {
    var _run = function (number) {
      promiseFunc.wait(number).then(function (success) {
        console.log(success);
        _run(number + 1);
      }).catch(function (error) {
        console.log(error);
      });
    };

    return {
      run: _run
    };
  })();

  //success
  main.run(1);
});