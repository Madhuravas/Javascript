// Async and await

const p1 = new Promise((res, rej) =>{
    setTimeout(() =>res("Get data from server1"), 500);
})

const p2 = new Promise((res, rej) =>{
    setTimeout(() =>res("Get data from server1"), 20000);
})

const api = "https://api.github.com/users/Madhuravas";

const getDataWithFetch = async () =>{
    try{
        let data = await (await fetch(api)).json();
        console.log(data)
    }catch(err){
        console.log(err)
    }

}

getDataWithFetch();

const handleServer = async () =>{
   console.log("Hello world")

   let data = await p1;
   console.log(data)

   let data2 = await p2;
   console.log(data2);
}

handleServer();

async function getData(){
    return new Promise((res, rej) => res("hello world"));
}

console.log(getData());