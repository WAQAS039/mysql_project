const express = require('express');
const routes = express.Router();
const {getUsers,getSingleUser,createUser,updateUser} = require('../controllers/user_controller');
routes.get("/",getUsers);
routes.get("/:id",getSingleUser);
routes.post("/",createUser);
routes.put("/:id",updateUser);
module.exports = routes;

