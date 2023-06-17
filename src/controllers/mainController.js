const fs = require("fs");
const path = require("path")
const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/productos.json")));

const mainController = {
    home: (req, res) => {
        return res.render("home");
    },
    register: (req, res) => {
        return res.render("register");
    },
    login: (req, res) => {
        return res.render("login");
    }
}

module.exports = mainController