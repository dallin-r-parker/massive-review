
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const port = 4000;
const app = express();

app.use(bodyParser.json());

// ================== INITIALIZE MASSIVE DB
massive({
  host: 'localhost',
  port: 5432,
  database: 'user_test',
}).then(db => {
  app.set('db', db)
  console.log('working')
})

//================= Controllers
const userCtrl = require('./controllers/userCtrl');



app.get('/api/all-users', userCtrl.getAll);
app.post('/api/new-user', userCtrl.createUser);





app.listen(port, () => { console.log(`listen on port ${port}`) });
