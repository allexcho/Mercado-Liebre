const express = require("express")
const app = express()
const path = require("path")

app.use(express.static("public"))

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3030;
app.listen(port, () => console.log('Servidor corriendo en el puerto ${port}'));

app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "/views/home.ejs"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.ejs"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.ejs"))
})

app.use(mainRouter);