const express = require('express');
const router = express.Router();

// CREATING MIDDLEWARE
function time(req, res, next) {
    console.log(Date().toString());
    next();
}

const cats = [
    {
        name: "Tabby",
        color: "Orange",
        age: "3"
    },
    {
        name: "Misty",
        color: "Black",
        age: "4"
    },

]

router.use(time);



router.route('/')
    .get((req, res) => {
        res.send(JSON.stringify(cats));
    })
    .post((req, res) => {
        cats.push(req.body);
        res.send(JSON.stringify(cats));
    })

router.get('/about', (req, res) => {
    res.send('About Cats!!');
});

module.exports = router;