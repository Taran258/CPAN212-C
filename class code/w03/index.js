import express from 'express';

const app = express();
const PORT = process.PORT || 8000;



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello from Server");
});
app.post("/", (req, res)=> {
    res.send("Hello from the Post request");
});

/*
DOMAIN https://www.youtube.com
endpoint :/watch


? <query Object
v=pAsmrKyNqaA

rreq: {
ip,
os,
url,
method
query, parameter, body
}
*/
//for params
app.get("/params/itemID", (res, req)=> {
console.log(req.url);
console.log(req.query);
console.log(req.params);
console.log(req.body);
res.send("You get to the params endpoint");
});
app.get("/watch", (res, req)=> {
console.log(req.url);
console.log(req.query);
console.log(req.params);
console.log(req.body);
res.send("You get to the watch endpoint");
});