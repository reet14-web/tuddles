// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();

// mongoose.connect("mongodb://127.0.0.1:27017/login", {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
// })
// .then(() => {
//     console.log("Connection successful");
// })
// .catch((e) => {
//     console.log("No connection:", e);
// });

// const LogInSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// const collection = mongoose.model("collection", LogInSchema);

// module.exports = collection;
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/TOODLES", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connection successful");
})
.catch((e) => {
    console.log("No connection:", e);
});

const LogInSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
});

const userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
});

const User = mongoose.model("User", LogInSchema);
// const fullUser = mongoose.model("fullUser", userSchema); // Changed model name to "User"

module.exports = User; // Export the User model