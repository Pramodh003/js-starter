numArr = []

for (let i = 1; i <= 100; i++) {
    // if(i%5==0 && i%3==0) {
    //     console.log(`${i} fizzbuzz`);        
    // }
    let text = ''
     if(i%3==0) {
         text +='fizz'
        // console.log(`${i} fizz`);
    }
    if(i%5==0){
        text+='buzz'
        // console.log(`${i} buzz`);
    }
    if(text){
        console.log(text);
    }else{
        console.log(i);
    }
    
}

// console.log(numArr);

