const Movie = require('../models/movie')


module.exports.home= async function(req,res){
    
    let movies = await Movie.find({})
    return res.render('home',{
        title:"Home",
        movies:movies
    })  
}

module.exports.form=async function(req,res){

    const movie= await Movie.create({
        movie_name:req.body.movie_name,
        rating:req.body.rating,
        duration:req.body.duration
    })
   
    return res.redirect('back');
}
 module.exports.formPage=async function(req,res){
    return res.render('form',{
        title:"formPage"
    }) 
 }