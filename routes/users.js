import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { createUser } from '../controllers/users.js';

const router = express.Router();

let users = [
    {
        name : "John",
        lastName : "doe",
        age : 24
    },
    {
        name : "Jane",
        lastName : "Francis",
        age : 20
    }
];

router.get('/', (req, res) => {
    console.log(users)
    res.send(users)
})



router.post('/', createUser)

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser =  users.find(user => user.id === id);

    res.send(foundUser)
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const singleUser = users.filter(user => user.id !== id);
    res.send(`user with the id ${id} has been deleted`);
})

router.patch('/:id', (req, res)=>{
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user =  users.find(user => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated`)
})

export default router;