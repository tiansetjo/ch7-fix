const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        require : [true, 'Please Enter Your Email'],
        unique : true,
        lowercase : true,
        validate :[isEmail,'Email is not registered']
    },
    password : {
        type : String,
        require : [true, 'Please enter your password'],
        minlength : [6, 'password length is 6 characters'],
    },
})


//fire a function after doc saved to db
// userSchema.post('save', async function(doc, next){
//     const salt = await bcrypt.genSalt();
//     next();
// })

//fire a function before doc saved to db
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

//static method to login user
userSchema.statics.login = async function(email, password){
    const user = await this.findOne({email})
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}

const User = mongoose.model('user', userSchema);

module.exports = User;