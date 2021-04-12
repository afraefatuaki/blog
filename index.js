const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.static('public'));
const articles = require('./articles.json');
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('listening on', `http://localhost:${PORT}`)
});

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.get('/', (req, res) => {
    res.render('pages/index',
        {
            title: 'Homepage',
            data: articles
        })
})