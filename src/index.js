import { app } from './app.js';
import connectDb from './db/index.js';
import dotenv from 'dotenv';

dotenv.config({
    path: './env/.env'
})

connectDb()

    .then(() => {
        app.on('error', (error) => {
            console.log("Error starting server: ", error)
        })
         
        app.listen(process.env.PORT || 6900, () => {
            console.log(`Server running on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("Error connecting to database", error)
    })
