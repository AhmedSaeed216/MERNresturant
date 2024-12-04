import app from "./app.js"

// use


app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${process.env.PORT}`)
});
