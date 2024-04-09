import mongoose from 'mongoose'

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true)

    // if DB is already connected don't connect again
    if(connected){
        console.log('Mongo DB is already connected')
        return
    }

    // Connect to MongoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true
        console.log('MongoDB is Connected!')
    } catch (error) {
        console.log(error)
    }

}

export default connectDB