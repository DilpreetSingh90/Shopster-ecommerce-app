import mongoose from "mongoose";

const dbConnect = () =>{
    if(mongoose.connection.readyState >= 1){
        return;
    }
    else{
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDb connected");
    }
}

export default dbConnect;