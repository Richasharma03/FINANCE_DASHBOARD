const Record = require("../models/Record");


exports.createRecord = async (req, res) => {
  const record = new Record(req.body);
  const saved = await record.save();
  res.json(saved);
};


exports.getRecords = async (req, res) => {
  const page = req.query.page || 1;
  const limit = 5;
  const category = req.query.category;
  

  let query = {};

  if (category) {
    query.category = category;
  }

  const records = await Record.find({
  ...query,
  isDeleted: false
})
    .skip((page - 1) * limit)
    .limit(limit);

  res.json(records);
};
exports.getTotalIncome = async (req, res) => {
  const result = await Record.aggregate([
    { $match: { type: "income" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  res.json(result);
};
exports.getTotalExpense = async (req, res) => {
  const result = await Record.aggregate([
    { $match: { type: "expense" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  res.json(result);
};
exports.getNetBalance = async (req, res) => {
  const income = await Record.aggregate([
    { $match: { type: "income" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

 

  const expense = await Record.aggregate([
    { $match: { type: "expense" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const net =
    (income[0]?.total || 0) - (expense[0]?.total || 0);

  res.json({ netBalance: net });
};
 exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndUpdate(req.params.id, {
    isDeleted: true
  });

  res.json({ message: "Record soft deleted" });
};
exports.updateRecord = async (req, res) => {
  try {
    const updated = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};