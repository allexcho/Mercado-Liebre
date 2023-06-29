const fs = require("fs");
const path = require("path")

const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/user.json")));

const cookieExiste = (req, res, next) => {
    if (!req.session && req.cookies.recordame) {
        const usuario = datos.find((row) => row.email == req.cookies.recordame);
        delete usuario.password
        req.session.usuarioLogueado = usuario
    }
    next()
}

module.exports = cookieExiste