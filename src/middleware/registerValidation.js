const { body } = require("express-validator");

module.exports = [
    body("usuario").notEmpty().withMessage("Indica un nombre de Usuario").isLength({ min: 5, max: 30 }).withMessage("El nombre de usuario debe tener entre 5 a 25 caracteres"),
    body("password").notEmpty().withMessage("Campo necesario").isStrongPassword({ minLength: 8, minUppercase: 1, minLowercase: 1, minSymbols: 1 })
]