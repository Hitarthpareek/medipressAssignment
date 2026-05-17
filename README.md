# MediPress Assignment

This repository contains a full-stack MERN application built as a series of five assignments. The project is structured as a monorepo with a React frontend and a Node.js/Express backend. It showcases a progression of skills, from static UI layouts to complex full-stack CRUD applications with authentication.

## Assignments Overview

The project is divided into five distinct mini-applications, accessible from the main landing page:

1.  **Responsive Employee Card Layout:** A static, responsive layout displaying employee profile cards using modern HTML and CSS. (Tech: `HTML`, `CSS`)
2.  **Task Manager:** A client-side task manager demonstrating React state management. It allows users to add, delete, search, and filter tasks. (Tech: `React State`)
3.  **API Integration:** A user directory that fetches data from the public JSONPlaceholder API. It includes loading states, error handling, and a search feature. (Tech: `React`, `API Integration`)
4.  **PMIS Tool:** A mini Project Management Information System (PMIS) with a backend. It features a public dashboard to monitor all employee projects and a private, user-specific dashboard for creating and managing personal projects after logging in. (Tech: `MERN Stack`, `JWT`)
5.  **Daily Task Manager:** A full-stack CRUD application for managing daily tasks. It includes robust JWT-based user authentication (login/signup) and a personalized dashboard to create, read, update, and delete tasks associated with the logged-in user. (Tech: `React`, `Node.js`, `MongoDB`, `CRUD`)

## Technology Stack

*   **Frontend:**
    *   React (with Vite)
    *   React Router
    *   Axios
    *   React Hot Toast
    *   Lucide Icons
*   **Backend:**
    *   Node.js
    *   Express.js
    *   MongoDB (with Mongoose)
    *   JSON Web Tokens (JWT) for authentication
    *   Bcrypt.js for password hashing
*   **Tooling:**
    *   Vite
    *   Nodemon
    *   ESLint

## Key Features

*   **Full-Stack MERN Architecture:** Organized in a monorepo with a clear separation of frontend and backend concerns.
*   **User Authentication:** Secure user registration and login using JWT for Assignments 4 & 5.
*   **CRUD Functionality:** Complete Create, Read, Update, and Delete operations for projects (Assignment 4) and tasks (Assignment 5).
*   **Responsive Design:** All assignments and components are designed to be responsive across various screen sizes.
*   **Dynamic Dashboards:**
    *   A public-facing dashboard to view aggregated project statistics for all employees.
    *   Authenticated user dashboards for managing personal tasks and projects.
*   **API Integration:** Interacts with a custom-built backend API and an external public API (JSONPlaceholder).

## Project Structure

The repository is organized into two main directories: `frontend` and `backend`.

```
/
├── backend/         # Node.js, Express, and MongoDB backend
│   ├── config/      # Database connection
│   ├── controllers/ # API logic
│   ├── models/      # Mongoose schemas
│   └── routes/      # API routes
├── frontend/        # React.js client application (Vite)
│   └── src/
│       ├── components/ # Components organized by assignment
│       └── data/       # Static data
└── package.json     # Root scripts for installation and execution
```

## Getting Started

### Prerequisites

*   Node.js (v16.20.1 or later recommended)
*   npm (or a compatible package manager)
*   MongoDB (a local instance or a cloud-hosted URI string)

### Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hitarthpareek/medipressAssignment.git
    cd medipressAssignment
    ```

2.  **Install dependencies:**
    Run the following command from the root directory to install dependencies for both the frontend and backend.
    ```bash
    npm run install-all
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the `backend/` directory and add the following variables. Replace the placeholder values with your own.
    ```env
    MONGO_URI=<YOUR_MONGODB_URI>
    JWT_SECRET=<YOUR_SECURE_JWT_SECRET>
    PORT=5000
    ```

4.  **Build the Frontend:**
    This command bundles the React application for production.
    ```bash
    npm run build
    ```

5.  **Start the Server:**
    This command starts the backend server, which will also serve the static frontend application.
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:5000`.

### Development Mode

To run the frontend and backend servers separately for a better development experience with hot-reloading:

1.  **Start the Backend Server:**
    In your terminal, run:
    ```bash
    npm run dev --prefix backend
    ```
    The backend will start on `http://localhost:5000`.

2.  **Start the Frontend Dev Server:**
    In a separate terminal, run:
    ```bash
    npm run dev --prefix frontend
    ```
    The frontend dev server will start on `http://localhost:5173` and will proxy API requests to the backend.

## API Endpoints

The backend provides the following RESTful API endpoints:

*   **Authentication**
    *   `POST /api/auth/register`: Register a new user.
    *   `POST /api/auth/login`: Log in a user and receive a JWT.
*   **Projects (Assignment 4)**
    *   `GET /api/projects`: Get all projects.
    *   `POST /api/projects`: Create a new project (token required).
    *   `GET /api/projects/user/:id`: Get all projects for a specific user ID.
    *   `PUT /api/projects/:id/complete`: Mark a project as complete.
*   **Tasks (Assignment 5)**
    *   `GET /api/tasks`: Get all tasks for the logged-in user (token required).
    *   `POST /api/tasks`: Create a new task (token required).
    *   `PUT /api/tasks/:id`: Update a specific task (token required).
    *   `DELETE /api/tasks/:id`: Delete a specific task (token required).