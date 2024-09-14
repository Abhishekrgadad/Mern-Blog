import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    },
    profilePicture:{
        type:String,
        default:'get a default image url and paste it here',
    },
},{timestamps:true}
    
);

const User = mongoose.model('user',userSchema);
export default User;
