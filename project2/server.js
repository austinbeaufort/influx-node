const express = require('express');
const app = express();

// creating middleware functions, requests run through middleware first.
app.use((req, res, next) => {
    console.log('hi');
    next();
});

app.use((req, res, next) => {
    req.chance = Math.random();
    next();
})


// when route '/' endpoint is hit, do following...
app.get('/', (req, res) => {
    res.send(JSON.stringify({
        chance: req.chance
    }));
})

app.listen(3000, () => console.log('listening on 3000...'));