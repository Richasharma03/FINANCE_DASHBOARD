# 💰 Finance Dashboard Backend

## 📌 Project Overview

This is a backend application built using **Node.js, Express, and MongoDB** for managing financial data such as income and expenses.

It provides APIs for:

* Record management (CRUD operations)
* Role-based access control
* Financial analytics (income, expense, balance)

---

## 🚀 Features

* ✅ Create, Read, Update, Delete (CRUD) APIs
* ✅ Role-Based Access Control (Admin, Analyst, Viewer)
* ✅ Data Persistence using MongoDB
* ✅ Pagination for records
* ✅ Filtering by category
* ✅ Soft Delete functionality
* ✅ Financial Aggregations:

  * Total Income
  * Total Expense
  * Net Balance

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📂 Project Structure

```
finance_dashboard_backend/
│
├── controllers/
│   ├── recordController.js
│   └── userController.js
│
├── models/
│   ├── Record.js
│   └── User.js
│
├── routes/
│   ├── recordRoutes.js
│   └── userRoutes.js
│
├── middleware/
│   └── auth.js
│
├── app.js
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone <your-repo-link>
cd finance_dashboard_backend
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run the server

```
node app.js
```

Server will run on:

```
http://localhost:4000
```

---

## 📌 API Endpoints

### 🔹 Base URL

```
http://localhost:4000
```

---

### 1️⃣ Create Record

**POST** `/records`

Body:

```json
{
  "amount": 5000,
  "type": "income",
  "category": "salary",
  "notes": "April salary"
}
```

---

### 2️⃣ Get Records (Pagination + Filter)

**GET** `/records?page=1&category=salary`

---

### 3️⃣ Update Record

**PUT** `/records/:id`

Body:

```json
{
  "amount": 7000
}
```

---

### 4️⃣ Delete Record (Soft Delete)

**DELETE** `/records/:id`

---

### 5️⃣ Get Total Income

**GET** `/records/income`

---

### 6️⃣ Get Total Expense

**GET** `/records/expense`

---

### 7️⃣ Get Net Balance

**GET** `/records/balance`

---

## 🔐 Role-Based Access

| Role    | Access Level  |
| ------- | ------------- |
| Admin   | Full access   |
| Analyst | Create & View |
| Viewer  | Read only     |

---

## 🧠 Key Concepts Used

* REST API Design
* Middleware (Role-based access)
* MongoDB Aggregation
* Pagination & Filtering
* Soft Delete Pattern

---

## 📸 Sample Output

Example response:

```json
{
  "_id": "abc123",
  "amount": 5000,
  "type": "income",
  "category": "salary",
  "notes": "April salary",
  "isDeleted": false
}
```

---

## 👩‍💻 Author

**Richa Sharma**

---

## 🎯 Conclusion

This project demonstrates backend development skills including API design, database handling, authentication logic, and real-world financial data processing.
