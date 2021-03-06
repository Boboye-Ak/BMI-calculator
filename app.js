const path= require("path")
const ejs=require("ejs")
const router=require("./routers/patientsrouter")
const patient=require("./models/patient")
const express= require("express")
const mongoose= require("mongoose")
const app=express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())
const DATABASE=("mongodb+srv://boboye:boboye@cluster0.r1cxf.mongodb.net/patients?retryWrites=true&w=majority")


app.use(express.static("./Pages"))
app.use("/", router )


app.set("view engine", "ejs")

app.listen(process.env.PORT||5000,()=>{
    console.log("Server is listening on port 5000...")
})