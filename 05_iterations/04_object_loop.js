// const object = {
//     js: "JavaScript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in object) {
//     console.log(object[key]);
//     console.log(`${key} shortcut is for ${object[key]}`);
// }

// const programming = ["js","python","C++"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

const map = new Map()

map.set('IN','india')
map.set('UK','United kingdom')
map.set('USA','United states')

for (const key in map) {
    console.log(key);
}