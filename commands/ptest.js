/*
//you need .then() so you don't return the promise itself, rather than the result of the operation
mathAdd(2, 2).then( answer => {
    console.log(`The answer is ${answer}`);
}).catch(error => {
    console.error(error);
});

//myPromiseFunction().then(console.log).catch(console.error);
//for shorthand notation without callbacks??

//use Promise.all() for multiple promises inside a loop

//Regular Promises:
function myFunc(){
    myPromiseFunction().then(response => {
        console.log(response);
    });
}

//ASYNC VERSION... Async/Await
//Problem: function is now asynchronous, meaning an async function reuturns a promise itself,
//so anything calling that function also needs to resolve a promise instead of simply grabbing a return.
async function myFunc(){
    const response = await myPromiseFunction();
    console.log(response);
}

//The strength of async/await functions is that you can chain multiple promises together.
async function mFunc() {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await evenMore(b);
    console.log(c);
    //you can also return this!
    return c;
}

myFunc().then(console.log); // prints out value of c
//note: use try and catch for async/await errors
*/