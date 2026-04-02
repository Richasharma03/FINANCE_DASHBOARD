const express = require("express");
const mongoose = require("mongoose");

console.log("APP FILE RUNNING 🔥");

const app = express();


app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server is running ✅");
});




const recordRoutes = require("./routes/recordRoutes");
app.use("/records", recordRoutes);


mongoose.connect("mongodb+srv://richa:richa123@cluster0.rmvn4et.mongodb.net/")
  .then(() => console.log("Database Connected ✅"))
  .catch(err => console.log(err));


app.listen(4000, () => {
  console.log("Server started on port 4000 🚀");
  console.log("https://localhost:4000");
});
const Record = require("./models/Record");

app.get("/add-test-data", async (req, res) => {
  await Record.create({
    amount: 5000,
    type: "income",
    category: "Salary"
  });
app.get("/test-admin", (req, res) => {
req.headers.role = "admin";
res.send("Admin access test");
});

app.post("/login", (req, res) => {
  const { role } = req.body;

  if (!role) {
    return res.status(400).json({ message: "Role required" });
  }

  res.json({ message: "Login successful", role });
});

  await Record.create({
    amount: 2000,
    type: "expense",
    category: "Food"
  });

  res.send("Test data added ✅");
});
