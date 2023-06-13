const express= require("express")
const path = require("path")
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contactdance');
const fs= require("fs")
const app= express()
const bodyparser=require("body-parser")
const port=8000;


const contactschema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    Address: String,
    // desc: String,
  });
  const contact = mongoose.model('contact', contactschema);

// app.use(express.static("static",options))
app.use("/static",express.static("static"))
app.use(express.urlencoded())

app.set("view engine","pug")
app.set("views",path.join(__dirname,"views"))


app.get("/",(req,res)=>{
    // res.send("This is the home page of my first express app with ANDY")
    
    const params={ }
    
    res.status(200).render("home.pug",params);
})
app.get("/contact",(req,res)=>{
    // res.send("This is the home page of my first express app with ANDY")
    
    const params={ }
    
    res.status(200).render("contact.pug",params);
})
app.post("/contact",(req,res)=>{
    // res.send("This is the home page of my first express app with ANDY")
    
    mydata= new contact(req.body)
    mydata.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    })

    
    // res.status(200).render("contact.pug");
})

app.listen(port,()=>{
    console.log(`hii how are youu...welcome \nThe app started successfully at port ${port}`)
})


