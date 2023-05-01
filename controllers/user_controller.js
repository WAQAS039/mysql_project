const database = require('../config/config');

const getUsers = (req,res,next)=>{
    database.query("Select * from users",(err,result)=>{
        if(err) {
            return next(err);
        }
        res.status(201).json({result});
    });
};

const getSingleUser = (req,res,next)=>{
    const {id} = req.params;
    database.query("SELECT * FROM users where id = ?",[id],(err,result)=>{
        if(err){
            return next(err);
        }
        res.status(201).json({result});
    });
};

const createUser = (req,res,next)=>{
    const {name,email} = req.body;
    console.log(name,email);
    database.query("insert into users (name, email) VALUES (?, ?)",[name,email],(err,result)=>{
        if(err){
            return next(err);
        }
        res.status(201).json({result});
    });
}

const updateUser = (req,res,next)=>{
    const {name} = req.body;
    const {id} = req.params;
    database.query("update users set name = ? where id = ?",[name,id],(err,result)=>{
        if(err){
            return next(err);
        }
        res.status(201).json({result});
    });
}

module.exports = {getUsers,getSingleUser,createUser,updateUser};