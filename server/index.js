// Import all required modules.
const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// config dotenv
dotenv.config();

// Initialize app
const app = express();
app.use(express.json());
app.use(cors());

// Create routes
// Get '/'
app.get('/', (req, res) => {
    res.json("Welcome to Tinder Clone");
})

// Post '/signup'
app.post('/signup', async (req, res) => {
    // Get MongoClient.
    const client = new MongoClient(process.env.URI);

    // Get the email and password.
    const { email, password } = req.body;
    // Generate unique user id
    const generateUserId = uuidv4();
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // Connect to the Database and get the users collection.
        await client.connect();
        const database = client.db('app-data');
        const users = database.collection('users'); 

        // Check for existing user.
        const existingUser = await users.findOne({ email });
        // If user exist send the msg. 
        if (existingUser) {
            res.status(409).send('User already exit. Please try again!');
        }

        // Sanitize email
        const sanitizedEmail = email.toLowerCase();

        // Create data object.
        const data = {
            user_id: generateUserId,
            email: sanitizedEmail,
            hashed_password: hashedPassword
        };

        // Insert data the db.
        const insertedUser = await users.insertOne(data);

        // Generate Token
        const token = jwt.sign(insertedUser, sanitizedEmail, {
            expiresIn: 60 * 24
        });
        // Send response.
        res.status(201).json({token, userId: generateUserId, email: sanitizedEmail});

    } catch (err) {
        // Console log if any error.
        console.log(err);
    } finally {
        await client.close();
    };
});

// Post '/login'
app.post('/login', async (req, res) => {
    // Get MongoClient.
    const client = new MongoClient(process.env.URI);
    // Get the email and password.
    const { email, password } = req.body;
    
    try {
        // Connect to the Database and get the users collection.
        await client.connect();
        const database = client.db('app-data');
        const users = database.collection('users'); 

        // Check for existing user.
        const user = await users.findOne({ email });
        // Check for correct password.
        const correctPassword = await bcrypt.compare(password, user.hashed_password);

        // if user and password is correct, create token and send response
        if (user && correctPassword) {
            const token = jwt.sign(user, email, {
                expiresIn: 60 * 24
            })
            res.status(201).json({token, userId: user.user_id, email});
        } else {
            // if user or password is incorrect.
            res.status(400).send('Invalid Credentials');
        };

    } catch (err) {
        // Console log if any error.
        console.log(err);
    } finally {
        await client.close();
    };
});

// Get '/users'
app.get('/users', async (req, res) => {
    // Get MongoClient.
    const client = new MongoClient(process.env.URI);

    try {
        // Connect to the Database and get the users collection.
        await client.connect();
        const database = client.db('app-data');
        const users = database.collection('users');
        // Get all users.
        const returnedUsers = await users.find().toArray();

        // Return all users.
        res.send(returnedUsers);
    } 
    finally {
        // Close client.
        await client.close();
    };
});

// Host the app on the port
app.listen(process.env.PORT ,() => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
});
