// LH:8000/
import express from "express";
import lab_router from "./routers/lab_router.js"
const app = express();
const PORT =process.env.PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`)
});
app.use("/lab", lab_router);

app.use("", (req,res)=>{
    res.status(404).send("404 page not found")
});