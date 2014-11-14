define(["exports", "javascript/promise"], function (exports, _javascriptPromise) {
  "use strict";

  var promiseFunc = _javascriptPromise.default;


  var main = (function () {
    var _run = function (number) {
      promiseFunc.wait(number).then(function (number) {
        console.log(number);
      }).catch(function (number) {
        console.log(number);
      });
    };

    return {
      run: _run
    };
  })();

  //success
  main.run(1);

  //error
  main.run(2);
});