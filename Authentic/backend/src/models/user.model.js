import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {type : String, required : true,},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    profilePic : {type : String},
    role : {type : String, required : true, default : "user"},
}, {
    timestamps : true,
})

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        return next()
    } 
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
   return await bcrypt.compare(password, this.password)
}


const UserSchema = mongoose.model("UserSchema", userSchema, "userCredential");

export default UserSchema;