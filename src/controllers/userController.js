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
            "id": datos.length + 1,
            "name": req.body['nombre completo'],
            "username": req.body.usuario,
            "fechaDeNacimiento": req.body.nacimiento,
            "email": req.body.email,
            "domicilio": req.body.domicilio,
            "tipoDePerfil": req.body.perfil,
            "intereses": req.body.interes,
            "image": req.body.Fotoperfil,
            "password": req.body.password
        }
        fs.writeFileSync(path.resolve(__dirname, '../database/user.json'), JSON.stringify([...datos, user], null, 2));
        return res.redirect('/')
    }
}

module.exports = userController;