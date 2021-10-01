const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world')
});

router.get('/:name', (req,res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`)
});


router.get('/:fname/:lname', (req,res) => {
    const fname = req.params.fname;
    const lname = req.params.lname;
    res.send(`Hello ${fname} ${lname}`);
})

module.exports = router;