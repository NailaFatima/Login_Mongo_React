# 🎧 Podcast Admin Panel

A full-stack Podcast Admin Panel built with **React.js (Vite)** for the frontend and **Node.js** for the backend. This project enables administrators to manage podcast content securely and efficiently, featuring a JWT-based authentication module for secure login.

---

## 🚀 Tech Stack

| Layer     | Technology       |
|-----------|------------------|
| Frontend  | React.js (with Vite) |
| Backend   | Node.js (Custom Server) |
| Auth      | JSON Web Tokens (JWT) |
| Dev Tool  | Concurrently |
| Env Mgmt  | dotenv (.env) |

---

## 🗂️ Project Structure

Podcast-Admin/
├── Client/ # React frontend (with Vite)
├── Server/ # Node.js backend
│ └── app.js # Main server entry point
├── .gitignore
├── package.json


---

## 🔐 Authentication Module (JWT)

The project implements a secure login flow using **JSON Web Tokens (JWT)**:

### Login Flow

1. **POST /login** — Accepts admin credentials.
2. If valid, **server generates a JWT** with a secret key and sends it to the client.
3. **Client stores the token** in local storage or cookies (as per best practices).
4. For all protected routes:
   - Client attaches JWT in `Authorization` header:  
     ```
     Authorization: Bearer <token>
     ```
   - Server validates the token before granting access.

### JWT Benefits:
- Stateless authentication.
- Scalable and secure.
- Tokens are signed and optionally expire after a set time (configurable in `.env`).

---

## 🧪 Features

✅ JWT-based login module  
✅ Admin route protection  
✅ Modern frontend with Vite  
✅ Modular full-stack architecture  
✅ `.env` handling with `.gitignore` best practices  
✅ Concurrent startup with `concurrently`

---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js ≥ 16.x
- npm ≥ 8.x

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/podcast-admin.git
cd podcast-admin
### 2. Install Dependencies
npm install
This installs root-level and all nested dependencies.

### 3. Setup Environment Variables
Create a .env file inside the Server folder with:
JWT_SECRET=your_secret_key
TOKEN_EXPIRES_IN=1h
✅ The .env file is excluded from Git via .gitignore.

### 4. Run the App
npm start
This will run both frontend and backend concurrently:

Frontend: http://localhost:5173

Backend: http://localhost:3000 (or your configured port)

📁 Available Scripts
"scripts": {
  "start": "concurrently \"npm run start:frontend\" \"npm run start:backend\"",
  "start:frontend": "cd Client && npm run dev",
  "start:backend": "cd Server && node app.js"
}

### 📌 To-Do (Optional Enhancements)
Add Refresh Tokens

Role-based access control

Podcast analytics dashboard

Upload & stream podcast media
