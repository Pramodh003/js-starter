const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach((val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "JS"
    },
    {
        languageName: "Python",
        languageFile: "PY"
    },
    {
        languageName: "Java",
        languageFile: "JV"
    },
    {
        languageName: "Golang",
        languageFile: "Go"
    },
]

myCoding.forEach( (key,val) => {
    console.log(key.languageName);
})