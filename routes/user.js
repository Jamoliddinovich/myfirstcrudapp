import express from 'express'
import mongoose from "mongoose"
import UserModel from '../models/user.js'


const MongoURL = "mongodb://localhost:27017/crudapp"
mongoose.connect(
    MongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err) => {
        console.log(err)
    }
);
// (async()=>{

//     let newuser = new UserModel({
//         name:"To'qlinbek",
//         lastName:"Ermatov"
//     })
//     await newuser.save()
//     })()
const userrouter = express.Router()
userrouter.get("/", async (req, res) => {
    try {
        let users = await UserModel.find()
        await res.send(users)
    } catch (err) {
        console.log(err)
    }
})
userrouter.get("/:id", async (req, res) => {
    try {
        let user = await UserModel.findOne({
            _id: req.params.id
        })

        await res.send(user)
    } catch (err) {
        console.log(err)
    }

})
userrouter.post('/', async (req, res) => {
    try {
        let newUser = {
            name: req.body.name,
            lastName: req.body.lastName
        }
        let rt = new UserModel(newUser);
        rt.save((err, result) => {
            if (err) throw Error
            return res.json(result);
        })
        // let newus = await UserModel.insertMany([req.body])
        // console.log(newus)
        // res.redirect('/')
    } catch (err) {
        console.log(err)
    }

})
userrouter.put('/:id', async (req, res) => {
    try {
        let user = await UserModel.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: {
                ...req.body
            }
        }, {
            upsert: true
        })
        console.log(user)
        await res.redirect(`/api/users/${req.params.id}`)
    } catch (err) {
        console.log(err)
    }

})
userrouter.delete('/:id', async (req, res) => {
    try {
        let user = await UserModel.findOneAndDelete({
            _id: req.params.id
        })
        console.log(user)
        await res.redirect(`/api/users/`)
    } catch (err) {
        console.log(err)
    }

})
export default userrouter