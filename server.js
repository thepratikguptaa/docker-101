const express = require("express");
const app = express();
const path = require("path");
const { MongoClient } = require("mongodb");

const PORT = 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_URL = process.env.MONGO_URL || "mongodb://admin:password@localhost:27017/docker101-db?authSource=admin";
const client = new MongoClient(MONGO_URL);

let db;

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB server");
        db = client.db("docker101-db");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    }
}

//GET all users
app.get("/getUsers", async (req, res) => {
    try {
        const data = await db.collection('users').find({}).toArray();
        res.send(data);
    } catch (err) {
        console.error("Failed to get users", err);
        res.status(500).send({ message: "Failed to retrieve users" });
    }
});

//POST new user
app.post("/addUser", async (req, res) => {
    const userObj = req.body;
    try {
        await db.collection('users').insertOne(userObj);
        console.log("Data inserted in DB");
        res.redirect('/');
    } catch (err) {
        console.error("Failed to insert data", err);
        res.status(500).send({ message: "Failed to add user" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});