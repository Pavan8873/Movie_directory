const Movie = require('../models/movie')

// module.exports.profile=function(req,res){
//     return res.render('form');
// }
// module.exports.addData= function(req,res){

//     Movie.create({
//         movie_name:req.body.movie_name,
//         rating:req.body.rating,
//         duration:req.body.duration
//     })
//     // res.status(201).json({message:"created succesfully"})
//     // return res.render('home');
//     res.render('')
    
    

// }


// module.exports.form=async function(req,res){

//         const movie= await Movie.create({
          
//             movie_name:req.body.movie_name,
//             rating:req.body.rating,
//             duration:req.body.duration
//         })
//         console.log(req.body);
//         res.status(201).json({message:"created succesfully"})
        
    
//     };

// module.exports.create=function(req,res){
//     movie.create(req.body)
// }

module.exports.home= async function(req,res){
    // return res.end('<h1>Express is up for codiel</h1>')
    let movies = await Movie.find({})
    return res.render('home',{
        title:"Home",
        movies:movies
    })  
}
module.exports.form=function(req,res){
    return res.render('form',{
        title:"movies"
    })
}
