const express = require('express');
const jwt = require('jsonwebtoken');
const Note = require('../models/note');
const router = express.Router();

router.use((req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'secretkey');
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).send({ message: 'Unauthorized' });
  }
});

router.post('/', async (req, res) => {
  try {
    const note = new Note({ userId: req.userId, ...req.body });
    await note.save();
    res.status(201).send(note);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Define other CRUD routes similarly

module.exports = router;
