new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },1000);
})
.then((value)=>{
    console.log('First then :' + value);
    // return 9;
    return new Promise((resolve,reject)=>{
        resolve(9);
    })
    //The same effect with above line.
})
.then((value)=>{
    console.log('Second then :' +value);
})