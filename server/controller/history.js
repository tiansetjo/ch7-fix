var users_history = require('../model/userHistory');
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
    const history = new users_history({
        name : String,
        skor : String,
        rank : String
    })

    // save user in the database
    history
        .save(history)
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}