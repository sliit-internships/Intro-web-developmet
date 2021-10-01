const express = require('express');
const cors = require('cors');


const helloWorldRouter = require('./controllers/HelloWorldController');
const userRouter = require('./controllers/UserController');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/hello', helloWorldRouter);
app.use('/api/user', userRouter);

const port = 5000;
app.listen(port, () => console.log(`Server is listening on ${port}`))
