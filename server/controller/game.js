const users_game = require('../model/usersGame');
var users_game = require('../model/usersGame');
// var users_game = require('../model/model');
// var users_history = require('../model/model');

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const game = new users_game({
        name: String,
        lastPlay : String,
        lastRank : String,
        duration :String
    })

    // save user in the database
    game
        .save(game)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}