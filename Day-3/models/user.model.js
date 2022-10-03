const {Schema, model} = require("mongoose");
const UserSchema = new Schema({
    name:{required:true, type:String},
    email:{required:true, type:String},
    password:{type:String, required:true},
    number:{type:Number, required:true}
})

const User = model("user", UserSchema);
module.exports = User;