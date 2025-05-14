import http from"http";
import fs from "fs";
const server = http.createServer((req, res)=>{
if (req.url === "/"){
//do something
return res.end("Hello world from Taran")
}
else if (req.url === "/contact"){
//do something
const data = fs.readFileSync("./html/contact.html")
return res.end(data)
}
else if(req.url === "methods"){
    if(req.method === "GET") {// READ INFORMATION
        return res.end("Hello to get the  method");
    }
        if(req.method === "POST") {// CREATE INFROMATION/STORE INFORMATION
        return res.end("Hello to get the  method");
        }
        if(req.method === "PUT") {// UPDATE INFORMATION
        return res.end("Hello to get the  method");
    }
}
else {
    return res.end('404 page not found')
}
})
server.listen(3000, ()=>{
console.log('http://localhost:3000')
})