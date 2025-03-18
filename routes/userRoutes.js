const express = require('express');
const { createUser, getUsers, deleteUser } = require('../models/userModel');
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await getUsers();
    res.json(users);
});

router.post('/', async (req, res) => {
    const user = await createUser(req.body.name);
    res.status(201).send(user);
});

router.delete('/:id', async (req, res) => {
    await deleteUser(req.params.id);
    res.status(204).send();
});

module.exports = router;
