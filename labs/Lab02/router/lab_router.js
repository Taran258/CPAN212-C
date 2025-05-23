// LH:8000/
import express from "express";
const router = express.Router();
router.get("/", (req,res)=>{
    res.send("hello");
});
router.get("/name", (req,res)=>{
    res.send("Sanehdeep Kaur");
});
router.get("/greeting", (req,res)=>{
    res.send("My student number is n01680631");
});
//;h:8000/lab/add/2/2
router.get('/add/:x/:y', (req,res)=>{
    let x = parseFloat(req.params.x);
     let y = parseFloat(req.params.y);
     res.send(`${x + y}`);
});
//lh:8000/calculate/2/2//
router.get('/calculate/:x/:y/:operator', (req, res)=>{
    let x = parseFloat(req.params.x);
     let y = parseFloat(req.params.y);
     console.log(req.params.operator);
     switch (req.params.operator) {
        case "+": //%2B
            res.send(`${x + y}`);
            break;
            case "-":
            res.send(`${x - y}`);
            break;
            case "*":
            res.send(`${x * y}`);
            break;
            case "/": //%2F
                if(y != 0){
                    return res.send(`${x/y}`);

                }
            res.send("your denominator cannot be 0");
            break;
     
        default:
            break;
     }
});
export default router;