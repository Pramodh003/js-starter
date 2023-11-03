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


