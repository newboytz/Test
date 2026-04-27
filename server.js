const express = require('express');
const path = require('path');
const app = express();

// Muhimu: Hii inaiambia Vercel folder la views liko wapi
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Badala ya require route file, tuweke route moja hapa hapa kwanza tu-test
app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/donate', (req, res) => {
    res.render('donate');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/process-payment', (req, res) => {
    const { amount } = req.body;
    if (amount < 1000) {
        return res.send("Muamala umekataliwa! Chini ya 1000");
    }
    res.send(`Ulipaji wa TZS ${amount} unashughulikiwa...`);
});

module.exports = app;

if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => console.log('Inawaka port 3000'));
         }
         
