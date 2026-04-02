
const express = require("express");
const router = express.Router();

const recordController = require("../controllers/recordController");
const checkRole = require("../middleware/auth");
console.log(recordController);


router.post("/", checkRole(["admin", "analyst"]), recordController.createRecord);


router.get("/", checkRole(["admin", "analyst", "viewer"]), recordController.getRecords);
router.delete("/:id", checkRole(["admin", "analyst"]), recordController.deleteRecord);
router.put("/:id", checkRole(["admin", "analyst"]), recordController.updateRecord);

router.get("/income", checkRole(["admin", "analyst"]), recordController.getTotalIncome);
router.get("/expense", checkRole(["admin", "analyst"]), recordController.getTotalExpense);
router.get("/balance", checkRole(["admin"]), recordController.getNetBalance);

module.exports = router;