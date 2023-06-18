const express = require("express")
const app = express()
const path = require("path")
const mainRouter = require("./routes/mainRouter")
const userRouter = require("./routes/userRouter")

app.use(express.static("public"))

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Servidor corriendo en el puerto ${port}'));

app.use(mainRouter);
app.use("/user", userRouter);