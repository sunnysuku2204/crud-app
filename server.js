require('dotenv').config();
const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
