const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');
const methodOverride = require('method-override');
const logs = require("./middleware/logs")

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));
app.use(logs)

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log('servidor corriendo en el puerto 3000');
});

app.use(mainRouter);
app.use('/user', userRouter);