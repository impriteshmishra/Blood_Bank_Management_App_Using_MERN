const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role:{
        type:String,
        required:[true, 'role is required'],
        enum:['admin','organization','user','hospital']
    },
    name:{
        type:String,
        required: function(){
            if(this.role === 'user' || this.role === 'admin'){
                return true;
            }
            else{
                return false;
            }
        }
    },
    organizationName:{
        type:String,
        required:function(){
            if(this.role==='organization'){
                return true;
            }
            else{
                return false;
            }
        }
    },
    hospitalName:{
        type:String,
        required:function(){
            if(this.role=='hospital'){
                return true;
            }
            else{
                return false;
            }
        }
    },
    email:{
        type:String,
        required:[true, 'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'password is required'],
    },
    phone:{
       type:Number,
       required:[true, 'phone number is required'],
       unique:true
    },
    address:{
        type:String,
        required:[true, 'address is required']
    }
}, {timestamps:true});

module.exports=mongoose.model('users', userSchema);
 