const express = require('express');
const app = express();

// Home Page Route
app.get('/', (req, res) => {
    res.send('This is the Home Page');
});

// About Page Route
app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

// Contact Page Route
app.get('/contact', (req, res) => {
    res.send('This is the Contact Page');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
