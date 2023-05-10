const fs = require("fs");
const http = require("http")

const pic = fs.readFileSync('./pic.jpg')

http.createServer((req,res) => {
    res.writeHead(200,"Content-Type:text/plain");
    res.write(`${pic}`)
}).listen(8080)


const buffer = pic.slice(0,10)
console.log(buffer);