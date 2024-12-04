import React from 'react'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import axios from "axios"
import { useState } from 'react'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'
import { data } from '../restApi.json'

// const Reservation = () => {
//     const [firstName, setFirstName] = useState("")
//     const [lastName, setLastName] = useState("")
//     const [email, setEmail] = useState("")
//     const [date, setDate] = useState("")
//     const [time, setTime] = useState("");
//     const [phone, setPhone] = useState(0)
//     const navigate = useNavigate();


//     const handleReservation =async (e)=>{
//         e.preventDefault();

//         try {
//             const {data}=await axios.post("http://localhost:4000/reservation/",
//                 {firstName,lastName,email,date,time,phone},
//                 {
//                     headers:{
//                         "Content-Type":"application/json"
//                     },
//                     withCredentials:true
//                 }
//             );
//             toast.success(data.message);
//             setFirstName("");
//             setLastName("")
//             setEmail("")
//             setPhone(0);
//             setDate("")
//             setTime("");
//             navigate("/success")
//         } catch (error) {
//             toast.error(error.responce.data.message);
//         }
//     }
const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !date || !time || !phone) {
            toast.error("All fields are required!");
            return;
        }

        try {
            const { data } = await axios.post(
                "http://localhost:4000/reservation/",
                { firstName, lastName, email, date, time, phone },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
                
            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setDate("");
            setTime("");
            navigate("/success");
        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An unexpected error occurred!");
                console.error(error);
            }
        }
    };

  return (
    <section className="reservation" id="reservation">
        <div className="container">
            <div className="banner">
                <img src="/reservation.png" alt="reservation" />
            </div>
            <div className="banner">
                <div className="reservation_form_box">
                    <h1>MAKE A RESERVATIoN</h1>
                    <p>For further Qustion, Please Call</p>
                    <form>
                        <div>
                            <input type="text" placeholder='First name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                            <input type="text" placeholder='Last name' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                        </div>
                        <div>
                            <input type="date" placeholder='date' value={date} onChange={(e)=>setDate(e.target.value)} />
                            <input type="time" placeholder='time' value={time} onChange={(e)=>setTime(e.target.value)} />
                        </div>
                        <div>
                            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                            <input type="number" placeholder='number' value={phone} onChange={(e)=>setPhone(e.target.value)} />
                        </div>
                        <button typeof='submit' onClick={handleReservation}>RESERVE NOW <span><HiOutlineArrowNarrowRight/></span></button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )

}
export default Reservation