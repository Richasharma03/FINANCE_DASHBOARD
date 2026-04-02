# 💰 Finance Dashboard Backend

## 📌 Project Overview
This is a backend application for managing financial data such as income and expenses.  
It supports user roles, record management, and dashboard analytics.

---

## 🚀 Features

- User Role Management (Admin, Analyst, Viewer)
- Create, Read, Update, Delete (CRUD) operations for financial records
- Soft Delete functionality (records are not permanently deleted)
- Pagination and filtering support
- Dashboard APIs:
  - Total Income
  - Total Expense
  - Net Balance
- Input validation and error handling

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)

---

## ⚙️ Setup Instructions

1. Clone the repository  

2. Install dependencies  

3. Add MongoDB connection string in `app.js`

4. Run the server  

5. Server will start at  "https://localhost:4000"


---

## 📡 API Endpoints

### 🔹 Records

- **Create Record**

- **Get Records (with pagination)**

- **Update Record**

- **Total Expense**

- **Net Balance**

---

## 🧠 Assumptions

- User role is currently hardcoded for simplicity
- Authentication system is not implemented (can be added later)
- Data is filtered using query parameters

---

## ⚠️ Error Handling

- Validation for required fields (amount, type)
- Invalid ID handling
- Proper HTTP status codes used

---

## ⭐ Future Improvements

- Add JWT Authentication
- Add frontend dashboard (React)
- Add search functionality
- Improve role-based access with real users

---

## 👩‍💻 Author

Richa Sharma
