
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const port = 4000;
const app = express();


app.use(bodyParser.json());
app.use(express.static('../public'))
app.use(cors());
// ================== INITIALIZE MASSIVE DB
massive({
  host: 'localhost',
  port: 5432,
  database: 'user_test',
}).then(db => {
  app.set('db', db)
})

//================= Controllers
const userCtrl = require('./controllers/userCtrl');

app.get('/api/all-users', userCtrl.getAll);
app.post('/api/new-user', userCtrl.create);



app.listen(port, () => { console.log(`listen on port ${port}`) });
