const mongoose = require('mongoose');

const connectDB1 = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URL1, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB1