const mongoose = require("mongoose");




const customerSchema = new mongoose.Schema({
    firstname:
     {
   
    type:String,
    },
    
    lastname:
    {
    type:String
    },
    email:
        {
         type:String,
         required:true,
         unique: true
        },

    mobile :
    {
        type: Number
    },
    
    // dateofbirth :{
    //     type:String,
    //     required:true
    // },

  
    
    Date:{
        type: Date, 
        default: new Date
         },

    

    })


const Register = new mongoose.model("customer", customerSchema);

module.exports = Register;