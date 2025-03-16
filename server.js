const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple Route
app.get('/', (req, res) => {
    res.send(`Hello World! 🚀 Kailas's demo server is running!`);
});

// Health Check Route
app.get('/health', (req, res) => {
    res.json({ status: 'UP' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
