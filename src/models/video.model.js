import mongoose from 'mongoose';

const videoSchema = new mongoose.model({
    
},{timestamps:true});

export const videoModel =  mongoose.model('Video', videoSchema);