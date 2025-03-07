ShoppyGlobe-E-commerce-Application 
Github link : https://github.com/Prashant-Kushwaha-28/ShoppyGlobe-E-commerce-Application

# ShoppyGlobe E-commerce Application

ShoppyGlobe is an e-commerce application built using React, Redux, and React Router It allows users to browse products, add them to the cart, view product details, and complete the checkout process.
It provides APIs for user authentication, product management, and cart operations.

## Features
- **Login** : Display If first time use this APT.
- **Product List**: Displays a list of products fetched from an API.
- **axios** Fatcing backend data "It a connector frontend to backend.
- **Product Detail**: Shows detailed information about a selected product.
- **Search Functionality**: Filter products based on user queries.
- **Cart Management**: Add, remove, and modify quantities of products in the cart.
- **Checkout Page: View the cart summary and proceed to payment.
- **404 Page**: Shows a NotFound message for unknown routes.
- **Responsive Design**: Optimized layout for different screen sizes.
- **Performance Optimization**: Code splitting and lazy loading implemented.

## Project Structure

- **`/src`**
  - **`/components`**: Contains React components like `ProductList`, `ProductItem`, `Cart`, etc.
  - **`/store`**: Includes Redux store configuration, reducers, and actions.
  - **`/hooks`**: Custom hooks for data fetching.
  - **`/App.jsx`**: Main application component that handles routing.
  - **`/main.jsx`**: Entry point of the application.

## Installation

### Prerequisites

Make sure you have the installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Steps to Run the Project Locally

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/shoppyglobe.git
    cd shoppyglobe
    ```

2. Install dependencies:
    Using npm:
    ```bash
    npm install
    ```
    Or using Yarn:
    ```bash
    yarn install
    ```

3. Start the application:
    npm run dev
    ```

The application should now be running at [http://localhost:5173](http://localhost:5173).

## Features in Detail

### Product List
- Products are fetched from the API (`http://localhost:5000/api`) using `useEffect` and displayed in a grid layout.
- A custom hook (`useProductList`) manages product data fetching and state.

### Product Detail
- Users can view detailed product information by clicking on an item in the Product List.
- Product are fetched based on the product ID received from URL parameters.

### Cart Functionality- Cart state is managed with Redux.
- Users can add products to the cart, update quantities, and remove items.
- The cart summary calculates the total price dynamically.

### Search Feature
 A search input allows users to filter products by name. The filtered product list is displayed based on the search query.

### Routing
- Implemented using React Router for navigating between components:
    - `/`: Home (Product List)
    - `/products/:id`: Product Detail
    - `/cart`: Cart
    - `/checkout`: Checkout
    - `/account`: Account creation page
    - `*`: NotFound page for undefined routes

### Error Handling
- Basic error handling is in place for API fetch failures.
- User feedback is provided for missing or invalid input.

### Performance Optimization
- Code splitting and lazy loading are utilized through `React.lazy()` and `Suspense` for enhanced performance.

### Responsiveness
- The application design adapts well to various screen sizes (mobile, tablet, and desktop).

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Redux**: State management for handling global app state.
- **React Router**: For routing between application views.
- **Axios**: For making API requests.
- **CSS**: For application styling.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add Your Feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a Pull Request.


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


## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add Your Feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a Pull Request.


Author

PRASHANT KUSHWAHA

License

MIT License

Copyright (c) 2025 PRASHANT KUSHWAHA

## Acknowledgements
- **(http://localhost:5000/api)** for providing the mock product data.
- Thank you for checking out ShoppyGlobe!

