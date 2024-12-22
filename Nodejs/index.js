const crypto = require("node:crypto");

const maxCount = 2

const start = Date.now()
for(let i =0; i<maxCount; i++){
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () =>{
    console.log(`Hash: ${i+1} `, Date.now() - start)
  })
}

// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// console.log("Hash: ", Date.now() - start)




// const http = require("node:http")
// const fs = require("node:fs")

// const server = http.createServer((req, res) => {
//   if(req.url === '/'){
//     res.writeHead(200, {"content-type": "text/plain"})
//     res.end("Home page")
//   }else if(req.url === "/about"){
//     res.writeHead(200, {"content-type": "text/plain"})
//     res.end("About page")
//   }else if(req.url === "/api"){
//     res.writeHead(200, {"content-type": "text/plain"})
//     res.end(JSON.stringify({
//       "firstName":"Madhuravas",
//       "lastName":"Reddy"
//     }))
//   }else{
//     res.writeHead(302, {"content-type": "text/plain"})
//     res.end("Page not found")
//   }
// })

// server.listen("3000", () => {
//   console.log("Server running at port 3000")
// })





// const fs = require("node:fs")
// const zlib = require("node:zlib")

// const gzip = zlib.createGzip()

// const readableStrem = fs.createReadStream("./file.txt", {
//   encoding:"utf-8",
//   highWaterMark:4
// })

// const writeableStrem = fs.createWriteStream("./greet.txt");

// readableStrem.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))

// readableStrem.pipe(writeableStrem)

// readableStrem.on("data", (chunk) =>{
//   console.log(chunk)
//   writeableStrem.write(chunk)
// })









// async function readFile(){
//     try{
//       const data = await fs.readFile("./file.txt", "utf-8")
//       console.log(data + "1")
//     }
//     catch (err){
//         console.log(err)
//     }
// }

// readFile()

// fs.readFile("./file.txt", "utf-8")
// .then(data => console.log(data))
// .catch(err => console.log(err))

// console.log("First")
// const fileData = fs.readFileSync("./file.txt", "utf-8")
// console.log(fileData)

// console.log("Second")
// fs.readFile("./file.txt", "utf-8", (err, data) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data + "  asyn")
//     }
// })
// console.log("Third")

// fs.writeFileSync("./greet.txt", "Hello Madhu")

// fs.writeFile("./greet.txt", " Hello Madhuravas", {flag:'a'},(err) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Data uploaded")
//     }
// })

