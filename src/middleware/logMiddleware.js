const logMiddleware = (req, res, next) => {
    if (!req.session.usuarioLogueado) {
        return res.redirect("/user/login")
    } else {
        next()
    }
}

module.exports = logMiddleware