const Counter = require('../models/Counter');

exports.createCounter = async (req, res) => {
  try {
    const { title } = req.body;
    const counter = new Counter({ title });
    await counter.save();
    res.status(201).json(counter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCounters = async (req, res) => {
  const counters = await Counter.find();
  res.json(counters);
};

exports.getCounterById = async (req, res) => {
  try {
    const counter = await Counter.findById(req.params.id);
    if (!counter) return res.status(404).json({ message: 'Counter not found' });
    res.json(counter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.incrementCounter = async (req, res) => {
  try {
    const counter = await Counter.findByIdAndUpdate(req.params.id, { $inc: { count: 1 } }, { new: true });
    res.json(counter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.decrementCounter = async (req, res) => {
  try {
    const counter = await Counter.findByIdAndUpdate(req.params.id, { $inc: { count: -1 } }, { new: true });
    res.json(counter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCounter = async (req, res) => {
  try {
    const result = await Counter.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Counter not found' });
    res.json({ message: 'Counter deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};  