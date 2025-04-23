const express = require('express');
const router = express.Router();
const {
  createCounter,
  getCounters,
  getCounterById,
  incrementCounter,
  decrementCounter,
  deleteCounter,
} = require('../controllers/counterController');

router.post('/', createCounter);
router.get('/', getCounters);
router.get('/:id', getCounterById);
router.patch('/:id/increment', incrementCounter);
router.patch('/:id/decrement', decrementCounter);
router.delete('/:id', deleteCounter);

module.exports = router;