const express = require('express');
const path = require('path')
// Need to grab process enviroment ?
// '??' -> Just like the or operator, but will only check null value. 
// So if process.env.PORT is null, we will use PORT number 3001
const PORT = process.env.PORT ?? 3001;
// Setting up instance of application
const app = express();

// To load js css... but why?
app.use(express.static('public'));

// Request (technically 4 based on instruction GET (notes, *, /api/notes) POST (/api/notes))

app.get('/notes', (req, res) => {
    // Serve the HTML page.
    return res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('/api/notes', (req, res) => {
        // Serve the HTML page.
        return res.sendFile(path.join(__dirname, 'public/notes.html'));
    });
    
// if you use '*', it must be on the bottom or it will override every click to index.html page
app.get('*', (req, res) => {
    // Serve the HTML page.
    return res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Application is running @ http://localhost:${PORT}`)
});