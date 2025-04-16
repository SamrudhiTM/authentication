

# authentication
# Full Stack OAuth + Manual Auth System


Snapshots

![Image](https://github.com/user-attachments/assets/425b5584-e1e4-456a-b773-3a60bb3e31bc)
![Image](https://github.com/user-attachments/assets/af191d6b-1332-4e27-a63f-c99285a6a5c9)
![Image](https://github.com/user-attachments/assets/5aeffef2-cbf8-49d2-871c-0a74d2d6a487)
![Image](https://github.com/user-attachments/assets/1ec06d19-fbd4-40b2-acb2-43791cbdb460)

This project is a full-stack authentication system that supports:

- **OAuth Login** via Google, Facebook, and Apple (Mock)
- **Manual Email & Password Login/Signup**
- **JWT Token-Based Authentication**
- **Separate Login & Signup Pages**
- **User Dashboard After Login**
- **MongoDB Storage with Mongoose**

---

## 🛠 Tech Stack

**Frontend**: React  
**Backend**: Node.js, Express.js  
**Database**: MongoDB Compass (via Mongoose)  
**Authentication**: Passport.js (Google, Facebook, Apple [Mock]), JWT  
**Environment Variables**: `.env` used for API credentials & MongoDB URI

---

## 📁 Project Structure

```bash
project-root/
├── backend/
│   ├── config/
│   │   └── passport.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── utils/
│   │   └── jwt.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoginButtons.jsx
│   │   │   ├── AuthSuccess.jsx
│   │   │   └── Dashboard.jsx
│   │   └── App.js
│   └── package.json
└── README.md
```

---

## 🚀 How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/project-name.git
cd project-name
```

### 2. Set Up Backend

```bash
cd backend
npm install
```

Create a `.env` file in `/backend` with:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

FACEBOOK_CLIENT_ID=your_facebook_client_id
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret

APPLE_CLIENT_ID=mock_apple_client_id
APPLE_CLIENT_SECRET=mock_apple_client_secret
```

Run the backend:

```bash
node server.js
```

### 3. Set Up Frontend

```bash
cd ../frontend
npm install
npm start
```

---

## ✨ Features

- ✅ Google, Facebook, Apple (mock) OAuth login
- ✅ Manual Signup/Login using email and password
- ✅ JWT authentication with token validation
- ✅ Separate routes for login and signup
- ✅ User data saved in MongoDB
- ✅ Redirection to Dashboard after login
- ✅ Secure Passport strategy setup

---

## 📌 Notes

- Apple OAuth is **mocked** using dummy strategy for testing.
- Easily extendable for real Apple login when Developer Account is available.
- Uses JWTs to secure frontend/backend communication.


