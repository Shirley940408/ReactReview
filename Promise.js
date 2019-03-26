function doSomething(callback){
    console.log('doing something');
    callback&&setTimeout(callback,1000);
}
// callBack hell
// function startWithoutPromise(){
//     doSomething(
//         ()=>{
//             doSomething(
//                 ()=>{
//                     doSomething(
//                         ()=>{
//                             doSomething(
//                                 ()=>{
//                                     doSomething();
//                                 }
//                             )
//                         }
//                     )
//                 }
//             )
//             }
//     )
// }

// startWithoutPromise();

function startWithPromise(){
    new Promise((resolve,reject)=>{
        doSomething(()=>{
            resolve();
        })
    })
    .then(()=>{
        return new Promise((resolve)=>{
            doSomething(()=>{
                resolve();
            })
        }

        )}
    )
    .then(()=>{
        return new Promise((resolve)=>{
            doSomething(()=>{
                resolve();
            })
        }

        )}
    )
    .then(()=>{
        return new Promise((resolve)=>{
            doSomething(()=>{
                resolve();
            })
        }

        )}
    )
    .then(()=>{
        return new Promise((resolve)=>{
            doSomething(()=>{
                resolve();
            })
        }

        )}
    )
}
startWithPromise();