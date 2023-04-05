const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const Movie = require('./models/movie');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');

//use express router
app.set('view engine','ejs');
app.set('views','./views');


app.use(express.static('./assests'));
app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log('error in running th eserver',err);
    }
    console.log(`Server is running on port:${port}`);
})