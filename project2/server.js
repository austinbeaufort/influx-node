
// MIDDLEWARE BASICS

// const express = require('express');
// const app = express();

// // creating middleware functions, requests run through middleware first.
// app.use((req, res, next) => {
//     console.log('hi');
//     next();
// });

// app.use((req, res, next) => {
//     req.chance = Math.random();
//     next();
// })


// // when route '/' endpoint is hit, do following...
// app.get('/', (req, res) => {
//     res.send(JSON.stringify({
//         chance: req.chance
//     }));
// })

// app.listen(3000, () => console.log('listening on 3000...'));


// -----------------------------------------------------------------

// CREATING MULTIPLE CALLBACK FUNCTIONS ON A ROUTE.
// const express = require('express');
// const app = express();


// function first(req, res, next) {
//     console.log('first');
//     next();
// }

// function second(req, res, next) {
//     console.log('second');
//     next();
// }

// function third(req, res, next) {
//     console.log('third');
//     res.send('test');
// }

// // WHEN '/' IS HIT, RUNS ALL THREE CALLBACK FUNCTIONS IN THE BRACKETS []
// app.get('/', [first, second, third]);



// app.listen(3000, () => console.log('listening on 3000...'));


// --------------------------------------------------------------------------


// USING APP.ROUTE()

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json());

// books = [
//     {
//         title: "hunger games",
//         author: "suzanne collins",
//     },
//     {
//         title: "The Raven",
//         author: 'edgar allen poe',
//     },
//     {
//         title: "Jane Eyre",
//         author: "Charolette Bronte",
//     },
// ];


// app.get('/', (req, res) => {
//     res.send('welcome');
// })


// app.route('/books')
//     .get((req, res) => {
//         res.send(JSON.stringify(books));
//     })
//     .post((req, res) => {
//         books.push(req.body);
//         res.send(JSON.stringify(books));
//     })

// app.listen(3000, () => console.log('listening on 3000...'));