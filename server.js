const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

// Simple Route
app.get('/', (req, res) => {
    res.send(`Namasthe! Kailas's demo server is running on port ${PORT} !`);
});

// Health Check Route
app.get('/health', (req, res) => {
    res.json({ status: 'UP' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const customMessage = process.env.CUSTOM_MESSAGE || "Default message";
app.get('/message', (req, res) => {
    res.send(customMessage);
});
