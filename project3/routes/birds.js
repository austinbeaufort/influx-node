const express = require('express');
const router = express.Router();

// middleware that works only with this router.
function timeLog(req, res, next) {
    console.log(`Time: ${Date().toString()}`);
    next();
};

router.use(timeLog);


// ROUTES

router.get('/', (req, res) => {
    res.send('birds home page');
})

router.get('/about', (req, res) => {
    res.send('about birds');
})

module.exports = router;