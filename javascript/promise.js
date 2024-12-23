// Promise chain Function

let createOrder = () =>{
    const orderId = "12345"
    return new Promise((resolve, reject) =>{
        if(validateCart()){
            resolve(orderId)
        }else{
            reject(`${orderId} with order id ordr is cancled please try again`)
        }
    })
}


let validateCart = () =>{
    return false
} 

let paymentApi = () =>{
    return false
}

let proceedToPayment = () =>{
    return new Promise((res, rej) =>{
        if(paymentApi()){
            res("payment Compelated")
        }else{
            rej("Payment failed")
        }
    })
}

let showOrderSummary = () =>{
    return new Promise((res, rej) =>{
        res("showen summary")
    })
}

let updatedWallet = () =>{
    return new Promise((res, rej) =>{
        res("Wallet updated")
    })
}



createOrder()
.then(orderId =>{
    return orderId
})
.then((orderId) =>{
    console.log(orderId)
    return proceedToPayment()
})
.then((res) =>{
    console.log(res)
    return showOrderSummary()
})
.then((res) =>{
    console.log(res)
    return updatedWallet()
})
.then((res) =>{
    console.log(res);
})
.catch(err =>{
    console.log(err)
})

// promise apis

// 1. Promise.all
let promiseAll1 = Promise.resolve("resolved all One");
let promiseAll2 = Promise.reject("resolved all Two");
let promiseAll3 = Promise.resolve("resolved all Three");

let result = Promise.all([promiseAll1, promiseAll2, promiseAll3]);
result.then(res =>{
    console.log(res)
}).catch(err =>{
    console.log(err)
})

// 2. Promise.allSettled
let promiseSet1 = Promise.resolve("resolved allSettled One");
let promiseSet2 = Promise.reject("resolved allSettled Two");
let promiseSet3 = Promise.resolve("resolved allSettled Three");

Promise.allSettled([promiseSet1, promiseSet2, promiseSet3])
.then(res =>{
    console.log(res)
})
.catch(err =>{
    console.log(err)
})

// 3. Promise.race
let promiseRace1 = new Promise((res, rej) => setTimeout(() =>{res("resolved race One")}, 2000));
let promiseRace2 = new Promise((res, rej) => setTimeout(() =>{rej("failed race Two")}, 1000))
let promiseRace3 = new Promise((res, rej) => setTimeout(() =>{res("resolved race Three")}, 3000))

Promise.race([promiseRace1, promiseRace2, promiseRace3])
.then(res =>{
    console.log(res)
})
.catch(err =>{
    console.log(err)
})

// 4. Promise.any

let promiseAny1 = new Promise((res, rej) => setTimeout(() =>{rej("resolved race One")}, 2000));
let promiseAny2 = new Promise((res, rej) => setTimeout(() =>{rej("failed race Two")}, 1000))
let promiseAny3 = new Promise((res, rej) => setTimeout(() =>{res("resolved race Three")}, 3000))

Promise.any([promiseAny1, promiseAny2, promiseAny3])
.then(res =>{
    console.log(res)
})
.catch(err =>{
    console.log(err)
})