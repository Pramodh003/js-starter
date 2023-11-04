// Imediate Invoked Function expressions

(function chai () {
    // named iife
    console.log(`DB CONNECTED`);
})();
// to avoid global scope pollution we use iffe

((name) => {console.log(`DB CONNECTED1 ${name}`);})('akash')

