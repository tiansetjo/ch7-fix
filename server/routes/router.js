const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

const authRoutes = require('../routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

route.get('*', checkUser);

//home
route.get('/', services.homeRoutes);

// game
route.get('/game-play', requireAuth, services.game_play)

//add user
route.get('/add-user', services.add_user)

// update user
route.get('/update-user', services.update_user)

// login
route.get('/login', services.login)

route.get('/signup', services.signup)


// user history
route.get('/history-user', services.history_user)
//user game
route.get('/game-user', services.game_user)

//user admin
route.get('/admin', services.admin)

// // multiplayer
// route.get('/multiplayer', services.multiplayer)



// API
route.post('/admin/api/users', controller.create);
route.get('/admin/api/users', controller.find);
route.put('/admin/api/users/:id', controller.update);
route.delete('/admin/api/users/:id', controller.delete);

// const userData = {
//     username: "tian",
//     password: "12345",
//     email: "abc@gmail.com",
//     alamat : "pamulang"
//   };
  
// route.post("/login", (req, res) => {
//     const loginReq = req.body;
//     if (loginReq.username !== userData.username) {
//       res.status(400).send({
//         message: "Username is not registered",});
//     } else if (loginReq.password !== userData.password) {
//       res.status(400).send({ message: "Password is incorrect" });
//     } else if (loginReq.email !== userData.email) {
//       res.status(400).send({ message: "Email is incorrect" });
//     }
//     res.status(200).send({
//       message: "Login Successful",
//       data: userData,
//     });
//   });

module.exports = route