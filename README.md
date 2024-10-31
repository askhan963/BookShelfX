# BookShelfX 📚

**BookShelfX** is a feature-rich online bookstore application that combines a dynamic shopping experience for users with a robust admin dashboard for managing books and orders. Built with the MERN stack, it uses Firebase for user authentication and JWT for admin authentication, ensuring secure and efficient management. Tailwind CSS adds to the application's responsiveness and aesthetic appeal, while Redux Toolkit and RTK Query power efficient data handling.

> **Repository**: [GitHub - BookShelfX](https://github.com/askhan963/bookShelfX)  
> **Live Site**: [BookShelfX on Netlify](https://bookshelfx.netlify.app/)  
> **Backend Hosted**: Vercel

---

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)

---

## Features

### User Features
- **User Authentication (Firebase)**:
  - Email/Password and Google Sign-In.
  - Secure session management for a seamless shopping experience.

- **Shopping Experience**:
  - **Add to Cart**: Users can add multiple books to their cart.
  - **Remove from Cart**: Easy management of items within the cart.
  - **Checkout**: Smooth checkout process that confirms and saves orders.
  - **Order History**: View previously placed orders with relevant details.

### Admin Features
- **Admin Authentication (JWT)**:
  - Secure login for admin users, with access restricted to admin-only operations.

- **Dashboard Management**:
  - **Add, Update, and Delete Books**: Full CRUD operations for managing the book catalog.
  - **Orders Overview**: Monitor and manage all placed orders.
  - **Data Visualizations**: Interactive charts to view monthly revenue, order statistics, and trending books.

---

## Technologies

- **Frontend**:
  - **React** with **Redux Toolkit** and **RTK Query** for state and data management.
  - **Firebase Authentication** for user login and session tracking.
  - **Tailwind CSS** for responsive and consistent styling.
  - **React Hook Form** and **SweetAlert2** for seamless form handling and user notifications.

- **Backend**:
  - **Node.js** and **Express.js** for handling server-side logic.
  - **MongoDB** for a robust and scalable database.
  - **Multer** for image upload handling.
  - **JWT** for admin authentication, ensuring secure access control.
  - **Vercel** for backend hosting.

---

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or MongoDB Atlas)
- Firebase Project with Authentication enabled (Email/Password and Google providers)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/askhan963/bookShelfX.git
   cd bookShelfX
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file for backend and frontend configurations.

   ```bash
   # MongoDB Connection URI
   MONGO_URI=your_mongo_uri_here

   # JWT Secret Key
   JWT_SECRET_KEY=your_jwt_secret_here

   # Firebase Configuration (Frontend)
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   ```

4. **Run the Application**
   - **Frontend**: Start the React app.
     ```bash
     npm start
     ```
   - **Backend**: Start the Express server.
     ```bash
     npm run server
     ```

---

## Project Structure

```plaintext
BookShelfX/
├── client/                   # Frontend code
│   ├── public/               # Public assets
│   └── src/                  # Source files
│       ├── components/       # Reusable components (e.g., Cart, Order, Book)
│       ├── context/          # Firebase Auth context
│       ├── redux/            # Redux state management
│       ├── utils/            # Helper functions (e.g., getBaseUrl)
│       └── App.js            # Main App component
├── server/                   # Backend code
│   ├── controllers/          # Route controllers (e.g., Books, Orders)
│   ├── models/               # Mongoose models
│   ├── routes/               # API routes
│   ├── config/               # Database and middleware configurations
│   └── index.js              # Entry point for the Express server
└── README.md                 # Project documentation
```

---

## Screenshots

- **User Dashboard**: Intuitive dashboard for managing cart, orders, and profile.
- **Admin Dashboard**: Comprehensive management interface with data visualization.
- **Add/Edit Book**: Efficient book management interface with image upload and dynamic form validation.
## Contributing


--- 

## License

This project is licensed under the MIT License.
---

Enjoy exploring **BookShelfX**! Feel free to contribute or reach out if you encounter any issues or have suggestions.