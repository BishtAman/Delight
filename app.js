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

app.get('/Kdrama', (req, res)=>{
     res.render('Kdrama')
})

app.get('/english', (req, res)=>{
     res.render('english')
})


app.listen(5000,()=>{
     console.log('Server running successfully');
})