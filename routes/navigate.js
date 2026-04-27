const express = require('express');
const router = express.Router();

// 1. Barabara ya kuelekea Nyumbani (Home)
router.get('/', (req, res) => {
    res.render('index'); // Inafungua index.html/ejs
});

// 2. Barabara ya kuelekea Page ya Malipo (Donate)
router.get('/donate', (req, res) => {
    res.render('donate'); 
});

// 3. Barabara ya Login
router.get('/login', (req, res) => {
    res.render('login');
});

// 4. Logic ya ku-handle kiasi (Ile 1000 uliyosema)
router.post('/process-payment', (req, res) => {
    const kiasi = req.body.amount;
    if (kiasi < 1000) {
        return res.send("Muamala umekataliwa! Chini ya 1000");
    }
    res.send("Unakaribia kulipia TZS " + kiasi);
});

module.exports = router;
  
