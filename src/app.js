const express=require("express");
const app=express();
const port=process.env.PORT||8000;
var hbs = require('hbs');
const path =require("path");


app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname,"../templates/partials"));

app.use(express.static(path.join(__dirname,"../public")));

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/weather",(req,res)=>{
    res.render('weather');
});

app.get("/about",(req,res)=>{
    res.render('about');
});

app.get("*",(req,res)=>{
    res.render('404error')
});

app.listen(port,()=>{
    console.log(`listinig to the port no ${port}`)
});