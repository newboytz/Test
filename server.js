const express = require('express');
const app = express(); // Hapa ndipo 'app' inazaliwa!
const navigateRoutes = require('./routes/navigate');

// Mipangilio mingine ifuate sasa
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Ongeza hii kwa ajili ya kusoma JSON
app.use(express.static('public'));

// Tumia routes zako
app.use('/', navigateRoutes);

// MUHIMU KWA VERCEL:
module.exports = app; 

// Kwa ajili ya ku-test local (Codespaces)
if (process.env.NODE_ENV !== 'production') {
    const PORT = 3000;
    app.listen(PORT, () => console.log(`Inawaka kwenye port ${PORT}`));
}
