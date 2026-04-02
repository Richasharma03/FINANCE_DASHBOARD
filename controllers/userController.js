const Record = require("../models/Record");
const mongoose = require("mongoose");


exports.createRecord = async (req, res) => {
  try {
    const { amount, type } = req.body;

    // ✅ VALIDATION
    if (!amount || !type) {
      return res.status(400).json({
        message: "Amount and type are required"
      });
    }

    if (amount <= 0) {
      return res.status(400).json({
        message: "Amount must be greater than 0"
      });
    }

    if (type !== "income" && type !== "expense") {
      return res.status(400).json({
        message: "Type must be income or expense"
      });
    }

    const record = new Record(req.body);
    const saved = await record.save();

    res.status(201).json(saved);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET RECORDS (with pagination + filter)
exports.getRecords = async (req, res) => {
  try {
    let query = { isDeleted: false };

    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const skip = (page - 1) * limit;

    if (req.query.category) {
      query.category = req.query.category;
    }

    const records = await Record.find(query)
      .skip(skip)
      .limit(limit);

    res.json(records);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE RECORD
exports.updateRecord = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    if (req.body.amount && req.body.amount <= 0) {
      return res.status(400).json({
        message: "Amount must be greater than 0"
      });
    }

    const updated = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE (SOFT DELETE)
exports.deleteRecord = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    await Record.findByIdAndUpdate(req.params.id, {
      isDeleted: true
    });

    res.json({ message: "Record soft deleted" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// TOTAL INCOME
exports.getTotalIncome = async (req, res) => {
  try {
    const income = await Record.aggregate([
      { $match: { type: "income", isDeleted: false } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    res.json({ totalIncome: income[0]?.total || 0 });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// TOTAL EXPENSE
exports.getTotalExpense = async (req, res) => {
  try {
    const expense = await Record.aggregate([
      { $match: { type: "expense", isDeleted: false } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    res.json({ totalExpense: expense[0]?.total || 0 });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// NET BALANCE
exports.getNetBalance = async (req, res) => {
  try {
    const income = await Record.aggregate([
      { $match: { type: "income", isDeleted: false } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    const expense = await Record.aggregate([
      { $match: { type: "expense", isDeleted: false } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    const totalIncome = income[0]?.total || 0;
    const totalExpense = expense[0]?.total || 0;

    res.json({ balance: totalIncome - totalExpense });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};