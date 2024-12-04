import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MonogooseURL, {
        dbName: "resturant"
    }).then(() => {
        console.log("connected to db")
    }).catch((error) => { console.log("error occur while connecting db ") })
}

// export default dbConnection;