# ShoppyGlobe E-commerce Application

ShoppyGlobe is an e-commerce application built using React, Redux, and React Router It allows users to browse products, add them to the cart, view product details, and complete the checkout process.

## Features

- **Product List**: Displays a list of products fetched from an API.
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
    Using npm:
    ```bash
    npm start
    ```
    Or using Yarn:
    ```bash
    yarn start
    ```

The application should now be running at [http://localhost:3000](http://localhost:3000).

## Features in Detail

### Product List
- Products are fetched from the API (`https://dummyjson.com/products`) using `useEffect` and displayed in a grid layout.
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

Author

PRASHANT KUSHWAHA

License

MIT License

Copyright (c) 2025 PRASHANT KUSHWAHA

## Acknowledgements
- **Dummy JSON API** for providing the mock product data.
- Thank you for checking out ShoppyGlobe!
