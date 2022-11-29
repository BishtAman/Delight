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

app.get('/tv-english', (req, res)=>{
     res.render('tvshow-english')
})

app.get('/tv-hindi', (req, res)=>{
     res.render('tvshows-hindi')
})

app.get('/action', (req, res)=>{
     res.render('action')
})

app.get('/fantasy', (req, res)=>{
     res.render('fantasy')
})

app.get('/comedy', (req, res)=>{
     res.render('comedy')
})

app.get('/drama', (req, res)=>{
     res.render('drama')
})

app.get('/horror', (req, res)=>{
     res.render('horror')
})


app.listen(5000,()=>{
     console.log('Server running successfully');
})