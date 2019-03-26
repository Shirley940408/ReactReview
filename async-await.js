// async function funcAsync(){
//     let p = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('lalala...');
//             resolve('lalala');
//         },1000);
//     });
//     let result = await p;
//     console.log(result); 
// }
// funcAsync();

//The function above is the situation of resolve, later one is the situation of reject
async function funcAsync(){
    let p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('lalala...');
            reject('Promise has been rejected');
        },1000);
    });
    try{
        let result = await p;
        console.log("Program finished");
        //This will not be the outcome because of the rejection.
    }catch(e){
        console.log(e);
    }
    
    
}
funcAsync();