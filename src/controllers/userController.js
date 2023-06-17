const fs = require("fs");
const path = require("path")
const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/user.json")));

const userController = {
    home: (req, res) => {
        return res.render("home");
    },
    register: (req, res) => {
        return res.render("register");
    },
    login: (req, res) => {
        return res.render("login");
    },
    processRegister: (req, res) => {
        const user = {
        "id": 1,
        "name": "alex",
        "username": "allexcho",
        "birthday": "13/02/1998",
        "email": "allexcho98@gmail.com",
        "street": "avellaneda 3268",
        "status": "comprador",
        "interests": "moda",
        "image": "",
        "password": "1234"
        }
    }
}

module.exports = userController