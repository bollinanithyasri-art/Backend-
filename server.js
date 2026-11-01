
const express = require('express');

const app = express();

// Home route
app.get('/', (req, res) => {
    res.send("Welcome to my Node.js server!");
});

// About route
app.get('/about', (req, res) => {
    res.json({
        name: "B. Nithya Sri",
        section: "CSE-AIDE"
    });
});

// Time route
app.get('/time', (req, res) => {
    res.send(new Date().toString());
});

// 404 route
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Start server
app.listen(3000, () => {
    console.log("Express server running on port 3000");
});
