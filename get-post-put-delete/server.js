const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let accounts = [
    {
      "id": 1,
      "username": "paulhal",
      "role": "admin"
    },
    {
      "id": 2,
      "username": "johndoe",
      "role": "guest"
    },
    {
      "id": 3,
      "username": "sarahjane",
      "role": "guest"
    }
  ];



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// GET
app.get('/accounts', (req, res) => {
    res.json(accounts);
});

app.get('/accounts/:id', findUserAccount);

// POST
app.post('/accounts', postNewUser);

function postNewUser(req, res) {
    const incomingAccount = req.body;

    accounts.push(incomingAccount);
    res.json(accounts);
}

// PUT
app.put('/accounts/:id', (req, res) => {
    const accountId = Number(req.params.id);
    const body = req.body;
    const account = accounts.find(account => account.id === accountId);
    const index = accounts.indexOf(account);
    
    const updatedAccount = { ...account, ...body };
    accounts[index] = updatedAccount;

    res.send(updatedAccount);
})

// DELETE
app.delete('/accounts/:id', (req, res) => {
    const accountId = Number(req.params.id);
    const newAccounts = accounts.filter(account => account.id != accountId);
    accounts = newAccounts;
    res.send(accounts);
})




function findUserAccount(req, res) {
    const accountId = Number(req.params.id);
    const getAccount = accounts.find(account => account.id === accountId);

    if(!getAccount) {
        res.status(500).send('account not found..');
    } else {
        res.json(getAccount);
    }
}

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`App listening on port ${port}`));
