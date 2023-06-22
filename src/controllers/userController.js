const fs = require("fs");
const path = require("path")

const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/user.json")));

const { validationResult } = require("express-validator");

const userController = {
    login: (req, res) => {
        return res.render('login');
    },
    register: (req, res) => {
        return res.render('register');
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

        const rdoValidation = validationResult(req)
        console.log(rdoValidation.errors);
        if (rdoValidation.errors.length > 0) {
            return res.render("register", { errors: rdoValidation.mapped(), oldData: req.body })
        }

        fs.writeFileSync(path.resolve(__dirname, '../database/user.json'), JSON.stringify([...datos, user], null, 2));
        return res.redirect('/')
    },
    editar: (req, res) => {
        const usuario = datos.find((row) => row.id == req.params.id);
        return res.render('editar', { usuario: usuario });
    },
    processEdit: (req, res) => {
        const usuario = datos.find((row) => row.id == req.params.id);
        for (let propiedad in req.body) {
            usuario[propiedad] = req.body[propiedad];
        };
        fs.writeFileSync(path.resolve(__dirname, '../database/user.json'), JSON.stringify(datos, null, 2));
        return res.redirect('/');

    },
    perfil: (req, res) => {
        const usuario = datos.find((row) => row.id == req.params.id);
        console.log(usuario)
        return res.render('perfil', { usuario: usuario });
    },
    eliminar: (req, res) => {
        const usuario = datos.find((row) => row.id == req.params.id);
        usuario.borrado = true;
        fs.writeFileSync(path.resolve(__dirname, '../database/user.json'), JSON.stringify(datos, null, 2));
        return res.redirect('/')
    }
}

module.exports = userController;