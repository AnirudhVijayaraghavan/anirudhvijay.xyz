// server/proxy.js (ES module version)
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

// Optional: use CORS middleware (adjust options as needed)
app.use(cors());

app.get('/api/quotes', async (req, res) => {
    try {
        // Fetch quotes from ZenQuotes API
        const response = await axios.get('https://zenquotes.io/api/quotes/');
        // Set CORS header (if needed – this is optional since cors middleware is used)
        res.set('Access-Control-Allow-Origin', '*');
        res.json(response.data);
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({ error: 'Unable to fetch quotes' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
