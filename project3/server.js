const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const birds = require('./routes/birds');
const cats = require('./routes/cats');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// ROUTES
app.use('/birds', birds);
app.use('/cats', cats);

app.get('/', (req, res) => {
    res.send('home page');
})


const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}...`));