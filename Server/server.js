const express = require("express");
const app =express();
const port=5217;
const UsersRoute=require("./Router/userRouter")
const cors = require("cors");
app.use(cors());

app.use(express.json())

app.use("/users",UsersRoute)
app.listen(port ,()=>{
    console.log("server is start");
} )
