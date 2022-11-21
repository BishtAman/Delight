const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', (req, res)=>{
     res.render('index')
})

app.get('/Korean', (req, res)=>{
     res.render('Korean')
})

app.get('/english', (req, res)=>{
     res.render('english')
})

app.get('/kids', (req, res)=>{
     res.render('kids')
})


app.listen(5000,()=>{
     console.log('Server running successfully');
})