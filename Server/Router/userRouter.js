const express = require("express");
const jwt = require("jsonwebtoken");
const KEY = "rajeshkumaranisetti";
const route = express.Router();
const createConnection = require("../configure/connection");
route.post("/signup",async(req,res)=>{
    const newuser = req.body;
    const collection = await createConnection();
    collection.insertOne(newuser).then(()=>{
        res.send({
            ok:true,
            result:"user create",
        })
    }).catch((error)=>{
        console.log(error);
        res.send({
            ok:false,
            result:"failed to create",
        })
    })

});
route.post("/signin", async(req,res)=>{
    //http://localhost:5217/users/signin
    const newuser=req.body;
    console.log(newuser)
    const collection=await createConnection();
    collection.findOne(newuser).then((resp)=>{
        console.log(resp)
        //create token
        const token=jwt.sign(resp, KEY)
        res.send({
            ok:true,
            message:"working",
            result: token,
        })
    }).catch((error)=>{
        console.log(error);
        res.send({
            ok:false,
            message:"user not exit",
            response: null, 
        })
    })
})
module.exports=route;
