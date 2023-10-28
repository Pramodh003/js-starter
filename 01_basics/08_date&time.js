let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getDate());
// console.log(myDate.getHours());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getMinutes());
// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0 ,23)
// let myCreateDate = new Date(2023, 0 ,23, 5, 3)
// let myCreateDate = new Date("2023-01-23")
// let myCreateDate = new Date("01-23-2023")


// console.log(myCreateDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp.toLocaleString());
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time`);

newDate.toLocaleString('default',{
    weekday: "long"

})
