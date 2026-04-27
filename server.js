const express = require('express');
const app = express();
const navigateRoutes = require('./routes/navigate');

app.set('view engine', 'ejs'); // Tunatumia EJS kuonyesha HTML
app.use(express.urlencoded({ extended: true })); // Ili kusoma data za form
app.use(express.static('public')); // Folder la CSS

// Tumia ile navigate.js yetu hapa
app.use('/', navigateRoutes);

app.listen(3000, () => {
    console.log("Website ya majaribio inawaka kwenye port 3000");
});
