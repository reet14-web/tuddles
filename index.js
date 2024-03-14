// const express = require("express");
// const app = express();
// const path = require("path");
// const hbs = require("hbs");
// const collection = require("./db/config");

// app.use(express.json());
// app.use(express.urlencoded({extended:false}));
// app.use(express.static("public"));
// app.set("view engine", "ejs");
// app.set('views', path.join(__dirname, 'views'));

// app.get("/", (req, res) => {
//     res.render("login");
// });

// app.post("/",async(req, res) => {
//     const data = {
//         email: req.body.email,
//         password: req.body.password 
//     };
//     const userdata=await collection.insertMany(data);
//     console.log(userdata);
// });

// const port = process.env.PORT || 3000;
// app.get("/hello", (req, res) => { // Changed the route path to "/hello" to avoid conflict with the previous "/"
//     res.send("hello reet");
// });

// app.listen(port, () => {
//     console.log(`server is running at port no ${port}`); // Changed to backticks for string interpolation
// });
const express = require("express");
const app = express();
const path = require("path");
const collection = require("./db/config"); // Ensure that collection is properly initialized
console.log("works");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res) => {
    // const data = {
    //     email: req.body.email,
    //     password: req.body.password
    // };
    const { email, password } = req.body;
    try {
        const userData = await collection.create(req.body); // Use insertOne for single document insertion
        console.log("User data inserted:", userData);
        res.status(200).json({ success: true, userData });
    } catch (error) {
        console.error("Error inserting user data:", error);
        res.status(500).json({ success: false, error: error.message }); // Send error message
    }

});
console.log("works");
const port = process.env.PORT || 3000;
app.get("/hello", (req, res) => {
    res.send("hello reet");
});

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
});