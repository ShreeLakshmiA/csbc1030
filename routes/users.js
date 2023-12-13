const { error } = require("console");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const usersInputPath = "samples/users.json";
let userList = [];

fs.readFile(usersInputPath, "utf8", (error, data) => {
    if (error) {
        const output = "Error reading users.json file... " + error;
        console.error(output);
    }
    try {
        userList = JSON.parse(data).users;
    } catch (parseError) {
        const output = "Error parsing users.json file... " + parseError;
        console.error(output);
    }
});

router.get("/", (req, res) => {
    console.log(userList);
    res.status(200).send(userList);
});

router.get("/:id", (req, res) => {
    const userId = req.params.id;
    const user = userList.find( u => u.id == userId );
    if (user != undefined) {
        console.log(`User with id ${userId} is ${user}`);
        res.status(200).send(user);
    } else {
        const err = `User with id ${userId} is NOT FOUND`;
        console.log(err);
        res.status(400).send(err);
    }
    
});

module.exports = router;