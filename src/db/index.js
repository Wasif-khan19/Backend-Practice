import mongoose from 'mongoose'
import {MY_DB} from '../constants.js'

const connectDb = async () => {
    try {
        const mongodbConnection = await mongoose.connect(`${process.env.MONGODB_URI}/${MY_DB}`)
        console.log(`MongoDB connected successfuly: ${mongodbConnection.connection.host}`);

    } catch (error) {
        console.log("Mongodb connection failed: ", error);
        process.exit(1)
    }
}
export default connectDb
