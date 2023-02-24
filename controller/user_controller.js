const {request, response} = require("express");
const User = require("../models/users");
const listUsers = async (req = request, res = response)=>{
    return res.json(User.findAll());
}

module.exports = {listUsers};