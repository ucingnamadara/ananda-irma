import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Guest from './models/guestModel.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/invitation/:code', async (req, res) => {
    const { code } = req.params;
    const guest = await Guest.findOne({ where: { code } })
    if (guest) {
        res.json(guest);
    }
    else {
        res.status(404).json({ message: 'Guest not found' });
    }
});

    
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});