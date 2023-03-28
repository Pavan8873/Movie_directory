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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',require('./routes'));

app.post('/create-movie',async function(req,res){

    const movie= await Movie.create({
        movie_name:req.body.movie_name,
        rating:req.body.rating,
        duration:req.body.duration
    })
    // res.status(201).json({message:"created succesfully"})
    return res.redirect('back');
    

})




app.listen(port,function(err){
    if(err){
        console.log('error in running th eserver');
    }
    console.log(`Server is running on port:${port}`);
})