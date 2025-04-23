# Counter App Backend

A simple backend service for managing counters using Node.js, Express, and MongoDB.

## 📦 Features
- Create a new counter
- Retrieve all counters
- Get a single counter by ID
- Increment / Decrement counter value
- Delete a counter

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
```bash
git clone <your-repo-url>
cd counter-backend
npm install
cp .env.sample .env
```

### Run the server
```bash
npm run dev
```

## 📌 API Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| POST | /counters | Create a new counter |
| GET | /counters | Get all counters |
| GET | /counters/:id | Get counter by ID |
| PATCH | /counters/:id/increment | Increment counter |
| PATCH | /counters/:id/decrement | Decrement counter |
| DELETE | /counters/:id | Delete counter |

## 📂 Project Structure
```
counter-backend/
├── config/
│   └── db.js
├── controllers/
│   └── counterController.js
├── models/
│   └── Counter.js
├── routes/
│   └── counterRoutes.js
├── .env.sample
├── server.js
├── package.json
├── README.md
```

