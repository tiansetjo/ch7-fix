const axios = require('axios');
// const http = require("http");

exports.homeRoutes = (req, res) => {
    res.render('index');
}


exports.admin = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/admin/api/users')
        .then(function(response){
            res.render('admin', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}


// export login and signup routes
exports.login = (req, res) =>{
    res.render('login');
}

exports.signup = (req, res) =>{
    res.render('signup');
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.game_play = (req, res) =>{
    res.render('game_play');
}

// exports.multiplayer = (req, res) =>{
//     res.render('multiplayer.html');
// }

exports.history_user = (req, res) =>{
    axios.get('http://localhost:3000/history_user/api/users')
    .then(function(response){
        res.render('history_user', { history : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.game_user = (req, res) =>{
    axios.get('http://localhost:3000/game_user/api/users')
    .then(function(response){
        res.render('game_user', { game : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/admin/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

