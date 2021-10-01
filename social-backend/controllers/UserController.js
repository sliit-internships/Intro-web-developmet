const express = require('express');
const router = express.Router();

let users = [
    {
        id: 1,
        name: 'Gihan Siriwardhana',
        address: 'Galle',
    },
    {
        id: 2,
        name: 'Tharindu Shehan',
        address: 'Matara',
    },
    {
        id: 3,
        name: 'Nalin Perera',
        address: 'Kandy',
    },
];

/*
    @method GET
    @description Retrieves all the users from the database
    @uri /api/user/
*/

router.get('/', (req,res) => {
    if(users.length > 0){
        console.log('Found users');
        res.status(200).send(users);
    }else{
        console.log('Not found users');
        res.status(204).send({
            message : 'No users found !'
        });
    }
    
});

router.get('/:id', (req,res) => {
    if(users.length > 0){

        users.forEach(user => {
            if(user.id == req.params.id){
                res.status(200).send(user);
            }
        });

    }else{
        console.log('Not found users');
        res.status(204).send();
    }    
});

router.post('/', (req, res) => {

    /*
        If you want to pass data in the request body, use it as req.body.name
    */
    const name = req.query.name;
    const address = req.query.address;

    const u = {
        id: users.length + 1,
        name,
        address
    }
    users.push(u);
    res.status(201).send(u);
});

router.delete('/:id', (req,res) => {
    if(users.length > 0){

        users = users.filter(user => user.id != req.params.id)       
        res.status(200).send(users);
    }else{
        console.log('Not found users');
        res.status(204).send();
    }    
});


module.exports = router;