const mongoose = require('mongoose')

const contactScheme = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name:{
        type:String,
        required:true
    },
    created_at:{
         type:Date,
         default:Date.now
    },
    updated_at:{
        type:Date,
        default:Date.now

    }

})
let contactModel = mongoose.Model("Contact",contactScheme)

module.exports = contactModel