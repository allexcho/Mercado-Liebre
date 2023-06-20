const fs = require("fs");
const path = require("path")

const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/productos.json")));

const mainController = {
    home: (req, res) => {
        const visitados = datos.filter((row) => row.category == 'visited');
        const ofertas = datos.filter((row) => row.category == 'in-sale');
        return res.render('home', { visitado: visitados, oferta: ofertas });
    },
    register: (req, res) => {
        return res.render("register");
    },
    login: (req, res) => {
        return res.render("login")
    }
}

module.exports = mainController