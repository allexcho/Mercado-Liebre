const fs = require("fs");
const path = require("path");

const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/user.json")));

const logMiddleware = (req, res, next) => {
    const usuario = datos.find((row) => row.id == req.params.id);

    if (usuario.loggeado == true) {
        next()
    } else {
        return res.redirect("/user/login")
    }
}

module.exports = logMiddleware