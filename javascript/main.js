import promiseFunc from 'javascript/promise';

let main = (() => {
    let _run = (number) => {
        promiseFunc.wait(number).then((number) => {
            console.log(number);
        })
        .catch((number) => {
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