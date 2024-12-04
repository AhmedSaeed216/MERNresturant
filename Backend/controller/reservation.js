import ErrorHandler from "../error/error.js";
import { reservation } from "../models/schema.js";


export const sendReservation =async(req,res,next)=>{
    const {firstName,lastName,email,phone,date,time}=req.body;



    // if(firstName || lastName || email || phone || date || time ){
    //     return next(new ErrorHandler("please fill full form"))
    // }

    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill out the entire form", 400));
    }
    
    // else 
    try {
        await reservation.create({firstName,lastName,email,phone,date,time})
            res.status(201).json({
                succcess:true,
                message:"Reservation sent Successfully"
            });
        
    } catch (error) {
        if(error.name === "ValidationError")
        {
            const validationError=Object.values(error.errors).map(
                (err)=>err.message
            );
            return next(new ErrorHandler(validationError.join(" , "),400))
        }
        return  next(error)
    }
}
