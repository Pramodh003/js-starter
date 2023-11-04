let a = 1000
if (true){
    let a =10
    const b = 20
    var c = 30
}


// console.log(a);
// console.log(b);
// console.log(c);


// Nested scope

function one(){
    const username = "pramodh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //two()
    //console.log(website);
    
}

//one()

// if else

if (true) {
    const username = "akash"

    if (username === "akash"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
    // console.log(username);
}
// console.log(username);

// ++++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++

function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num) {
    return num + 2
}

addTwo(5)