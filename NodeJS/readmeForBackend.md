# ShoppyGlobe E-commerce Backend

ShoppyGlobe is an e-commerce backend built using Node.js, Express, and MongoDB. It provides APIs for user authentication, product management, and cart operations.

## 🚀 Features
- User authentication (register, login, JWT-based auth)
- Product management (CRUD operations)
- Cart management (Add, Update, Delete items)
- API validation and error handling

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- bcrypt.js (for password hashing)
- Express Validator (for request validation)
- Mongoose (MongoDB ODM)

## 📂 Project Structure
```
ShoppyGlobe Backend
│── Controller/       # API controllers
│── Middlewares/      # Authentication & validation
│── Model/            # Mongoose schemas & models
│── Routes/           # API routes
│── server.js         # Server entry point
│── .env              # Environment variables
│── package.json      # Dependencies and scripts
```

## 🛠 Setup & Installation

### 1️⃣ Clone the repository:
```sh
git clone https://github.com/Prashant-Kushwaha-28/ShoppyGlobe-E-commerce-Application.git
cd ShoppyGlobe-E-commerce-Application/NodeJS
```

### 2️⃣ Install dependencies:
```sh
npm install
```

### 3️⃣ Create a `.env` file and add:
```sh
JWT_SECRET=your_secret_key
MONGO_URI=mongodb://localhost:27017/ShoppyGlobe
```

### 4️⃣ Start the server:
```sh
npm start
```
Server runs on `http://localhost:5000`

## 📌 API Endpoints
### 🔐 Auth Routes
| Method | Endpoint        | Description        |
|--------|----------------|--------------------|
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | User login & token generation |

### 🛍️ Product Routes
| Method | Endpoint           | Description        |
|--------|--------------------|--------------------|
| POST   | /api/products      | Create a product (Auth required) |
| GET    | /api/products      | Get all products |
| GET    | /api/products/:id  | Get product by ID |
| PUT    | /api/products/:id  | Update product (Auth required) |
| DELETE | /api/products/:id  | Delete product (Auth required) |

### 🛒 Cart Routes
| Method | Endpoint         | Description        |
|--------|-----------------|--------------------|
| POST   | /api/cart       | Add item to cart (Auth required) |
| GET    | /api/cart       | Get all cart items (Auth required) |
| GET    | /api/cart/:id   | Get cart item by ID (Auth required) |
| PUT    | /api/cart/:id   | Update cart quantity (Auth required) |
| DELETE | /api/cart/:id   | Remove item from cart (Auth required) |

## 📸 API Testing Screenshots
Refer to the `Screenshots` folder in the repository for ThunderClient API tests.
