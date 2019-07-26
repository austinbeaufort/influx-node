const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false }));


app.set('view engine', 'ejs');


// ROUTES
app.get('/weather', jsonWeatherData);
app.get('/weather/:day', (req, res) => {
    res.send(req.params.day);
});
app.get('/', displayResults);

app.post('/weather', (req, res) => {

    const weather = {
        day: req.body.day,
        high: req.body.high,
        low: req.body.low,
        precip: req.body.precip
    }

    influx.writePoints([
        {
            measurement: 'weather',
            tags: { day: weather.day },
            fields: { high: weather.high, low: weather.low, precip: weather.precip}
        }
    ])

    influx.query(`select * from weather`)
    .then(results => {
        res.send(JSON.stringify(results));
    })
});



// INFLUX SETUP AND QUERY
const Influx = require('influx');
const influx = new Influx.InfluxDB({
    host: 'localhost',
    database: 'test',
    // schema: [
    //     {
    //         measurement: 'weather',
    //         fields: {
    //             high: Influx.FieldType.INTEGER,
    //             low: Influx.FieldType.INTEGER,
    //             precip: Influx.FieldType.FLOAT
    //         },
    //         tags: [
    //             "day"
    //         ]
    //     }
    // ] 
});


function displayResults(req, res) {
    // req.query.....
    influx.query(`select * from weather`)
    .then(results => {
        console.log(results);
        let weatherArray = [];
        results.forEach(result => {
            weatherArray.push([result.day, result.high, result.low, result.precip])
        });
        res.render('index', {
            weather: weatherArray
        });
    });
}

function jsonWeatherData(req, res) {
    influx.query(`select * from weather`)
    .then(results => {
        res.send(JSON.stringify(results));
    })
}

function saveWeather(req, res) {
    
}




// LISTENING 
let port = 3000 || process.env.PORT;

app.listen(port, () => console.log(`listening on port ${port}`));