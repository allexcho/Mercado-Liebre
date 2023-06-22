const express = require('express');
const router  = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require('path');

const logMiddleware = require("../middleware/logMiddleware")

const multerDiskStorage = multer.diskStorage({ 
    destination: (req,file,cb) => {
        cb(null, path.resolve(__dirname, '../../public/img'))
    },
    filename: (req,file,cb) => {
        let imageName = Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    }
})

const fileUpload = multer({
    storage: multerDiskStorage
})

router.get('/login', userController.login);
router.get('/register', userController.register);
router.post('/register', userController.processRegister)

// Edicion de usuario 
router.get('/editar/:id', userController.editar);
router.put('/editar/:id', fileUpload.single('image'), userController.processEdit)
router.get('/perfil/:id', logMiddleware, userController.perfil);

// Eliminar usuario
router.delete('/eliminar/:id', userController.eliminar);

module.exports = router;