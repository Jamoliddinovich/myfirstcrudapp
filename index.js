import express from "express"

import userrouter from "./routes/user.js"
const app = express()

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
app.use(express.static('public'))
app.set('view engine','pug')
app.use('/api/users',userrouter)


app.get('/',async(req,res)=>{
try{
    await res.send("Hello")
}
catch(ex){
    console.log(ex)
}

})



const port = process.env.PORT||4000
app.listen(port,()=>{
    console.log(`server is running o port ${port}`)
})