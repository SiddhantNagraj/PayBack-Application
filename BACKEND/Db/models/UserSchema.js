const mongoose = require('../connection');

const Schema = mongoose.Schema;

// Creating a Schema
const UserSchema = new Schema ({
    username: {type: String,required: true,unique: true},
    email: {type: String, required: true,unique:true},
    password: {type: String, required: true},
    // email: {
    //     type: String,
    //     trim: true,
    //     required : [true, 'Please add a E-mail'],
    //     unique: true,
    //     // match: [
    //     //     /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
    //     //     'Please add a valid E-mail'
    //     //]
 
    // },
 
    // password: {
    //     type: String,
    //     trim: true,
    //     required : [true, 'Please add a Password'],
    //     minlength: [6, 'password must have at least six(6) characters'],
    //     match: [
    //         /^(?=.\d)(?=.[@#\-$%^&+=§!\?])(?=.[a-z])(?=.[A-Z])[0-9A-Za-z@#\-$%^&+=§!\?]+$/,
    //         'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters'
    //     ]
    // },
    friends: {type: Array},
    expensis: {type: Array}
})

const userModel = mongoose.model('user',UserSchema);

module.exports = userModel;