const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.static('public'));
const data = require('./articles.json');
// console.log(data)
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('listening on', `http://localhost:${PORT}`)
});

//body-parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.get('/', (req, res) => {
    res.render('pages/index',
        {
            title: 'Homepage',
            data
        })
})
app.get('/blog/:id', (req, res) => {
    console.log(req.params.id)
    let article = data.find(elt => elt.id == req.params.id)
    console.log(article)
    res.render('pages/blog', { article })
})

app.get('/addNew', (req, res) => {
    res.render('pages/addNew')
})

app.post('/addNew/new', (req, res) => {
    console.log(req.body)
    //for post we alway need a res.redirect
    res.redirect('/')
})