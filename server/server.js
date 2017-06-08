
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const massifier = require('dm-massifier')('postgresql://localhost:5432/user_test');
const app = express();
const port = 4000;


//================== MIDDLEWARE FOR EVERYTHING TO USE

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));
app.use(massifier.middleware());
app.use(cors());

// ================== INITIALIZE MASSIVE DB
// massive({
//   host: 'localhost',
//   port: 5432,
//   database: 'user_test',
// }).then(db => {
//   app.set('db', db)
// })

//================= CONTROLLERS
const userCtrl = require('./controllers/userCtrl');

//================= GET ENDPOINTS
app.get('/api/all-users', userCtrl.getAll);

//================= POST ENDPOINTS
app.post('/api/new-user', userCtrl.create);




// =================== PORT APP IS RUNNING ON
app.listen(port, () => { console.log(`listen on port ${port}`) });
