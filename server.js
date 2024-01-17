const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizroute = require('./router/quiz');
const jobsheetRoute = require('./router/jobsheet');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require('./models');
db.sequelize.sync()

app.get('/',(req,res) => {
    res.send("Quiz Express API by GIEN DARREL");
});

app.use('/api/quizzes',quizroute);
app.use('/api/jobsheet', jobsheetRoute);

app.listen(port, () => console.log (`App listening on port http://localhost:${port}!`));