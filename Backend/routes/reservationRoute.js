import express from "express"
// import { reservation } from "../models/schema";
import { sendReservation } from "../controller/reservation.js";
const router= express.Router()


router.post("/",sendReservation);


router.get("/",(req,res)=>{
    res.send("hi r=from reservation");
});


export default router;