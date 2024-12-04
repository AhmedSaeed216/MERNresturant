import mongoose from "mongoose";
import validator from "validator";

const reservationSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlenght:[3,"minimum number is 3"],
        maxlenght:[10,"maximum lenght s 10"]
    },
    lastName:{
        type:String,
        required:true,
        minlength:[3,"min length is 3"],
        maxlenght:[10,"max lenght is 10"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail,"provide a valid email"]
    },
    phone:{
        type:String,
        required:true,
        minlenght:[11,"phone no contain 11 digit"],
        maxlenght:[11,"phone no contain 11 digit"]
    },
    time:{
        type:String,
        required:true   
    },
    date:{
        type:String,
        required:true,
    },


})

export const reservation=mongoose.model("Reservation",reservationSchema);