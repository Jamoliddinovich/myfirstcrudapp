import mongoose from 'mongoose'

const userScheme = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
})
let UserModel = mongoose.model("User",userScheme)


export default UserModel