const express = require("express");
const app = express();

app.set("view engine","ejs");

app.use("/static",express.static("public"));

app.use(express.urlencoded({ extended: true }));

//Get Method
app.get('/',(req,res)=>{
    res.render('todo.ejs');
});
//POST Method
app.post('/',(req,res)=>{
    console.log(req.body);
});


app.listen(3000 , ()=> console.log("server up and running"));