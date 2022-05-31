// Import all required modules.
const express = require('express');
// Initialize app
const app = express();

// Create get route for '/'
app.get('/', (req, res) => {
    res.json("Server is running");
})

// Host the app on the port
const PORT = 8000;
app.listen(PORT,() => {
    console.log(`Server is running on PORT ${PORT}`);
});
