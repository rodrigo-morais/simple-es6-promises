let promiseFunc = (() => {
    let _wait = (number) => {
        return new Promise((resolve, reject) => {

            if (1 == number) {
                resolve("Stuff worked!");
            }
            else {
                reject(Error("It broke"));
            }
        });
    };

    return{
        wait: _wait
    };
})();

export default promiseFunc;