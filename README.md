# BookShelfX 📚

**BookShelfX** is a dynamic web application for managing a collection of books. Built with the MERN (MongoDB, Express.js, React, Node.js) stack, it provides a seamless experience for users to browse, add, and manage books in their library. This project uses Redux Toolkit with RTK Query for efficient state management and Tailwind CSS for a responsive and attractive UI.

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

- **User Authentication**: Secure login and registration with email/password and Google sign-in integration.
- **Admin Dashboard**: Admins can add, edit, or delete books and track key metrics (total sales, trending books, etc.)
- **Dynamic Book Management**: Add, edit, delete books, with image uploads and trending book tagging.
- **Interactive Charts**: Visualize revenue data and monthly sales in real-time using charts.
- **Responsive Design**: Tailwind CSS ensures a smooth experience across all devices.
- **Efficient Data Handling**: Optimized state management with Redux Toolkit and RTK Query.

---

## Technologies

- **Frontend**:
  - **React** with **Redux Toolkit** for state management
  - **RTK Query** for data fetching and caching
  - **Tailwind CSS** for styling
  - **React Hook Form** and **SweetAlert2** for forms and user feedback

- **Backend**:
  - **Node.js** and **Express.js** for server-side functionality
  - **MongoDB** for database
  - **Multer** for image handling
  - **JWT** for secure authentication
  - **Vercel** for backend hosting

---

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or cloud-based like MongoDB Atlas)

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
   Create a `.env` file in the root directory for both frontend and backend configurations.

   ```bash
   # MongoDB Connection URI
   MONGO_URI=your_mongo_uri_here

   # JWT Secret Key
   JWT_SECRET_KEY=your_jwt_secret_here

   # Vercel URL for backend
   BACKEND_URL=https://your-vercel-url.vercel.app
   ```

4. **Run the Application**
   ```bash
   # Start the backend server
   npm run server

   # Start the frontend server
   npm run client
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

---

## Project Structure

- **Frontend** (React)
  - `src/`
    - `components/`: Reusable UI components
    - `features/`: Redux slices and RTK Query logic
    - `pages/`: Application pages (Dashboard, Login, Register, etc.)
    - `styles/`: Tailwind CSS setup

- **Backend** (Node/Express)
  - `src/`
    - `controllers/`: API logic for handling CRUD operations
    - `models/`: Mongoose schemas for MongoDB
    - `routes/`: Endpoint definitions for API routes
    - `uploads/`: Directory for storing uploaded images

---

## Screenshots

- **User Login & Registration**
  
- **Admin Dashboard**
  
- **Book Management**

---

## Contributing

Feel free to fork the repository and submit pull requests. Any contributions, large or small, are highly appreciated!

--- 

## License

This project is licensed under the MIT License.