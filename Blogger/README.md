# Blogverse 📝

Blogverse is a modern full-stack blogging platform where users can write, explore, and interact with blogs in a clean and engaging interface. The platform is designed to make publishing simple while also encouraging interaction through likes, comments, and favourites.

It provides a smooth writing experience along with organized categories, fast API communication, and secure authentication.


# ✨ Features

## 🔐 Authentication

* Secure user signup and login.
* Password protection using encryption.
* Authentication-based access to protected features.

## 📝 Blog Management

* Create new blogs.
* Edit previously published blogs.
* Delete blogs when needed.
* Personal dashboard to manage posts.

## ❤️ Engagement Features

* Like blogs from other users.
* Comment on blog posts.
* Save blogs as favourites.

## 🗂️ Organized Content

* Category-based blog filtering.
* Icons and images for better UI.
* Clean reading layout.

## ⚡ Performance

* REST API integration using Axios.
* API caching for fewer server requests.
* Faster page interactions.

---

# 🛠 Tech Stack

## Frontend

* React
* TailwindCSS
* React Icons
* React Hot Toast
* Axios
* Vite

## Backend

* NodeJS
* ExpressJS
* MongoDB
* Mongoose
* CORS
* Dotenv
* MD5
* Nodemon

---

# 📁 Project Structure

```
Blogverse
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
└── frontend
    ├── src
    ├── components
    ├── pages
    └── main.jsx
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** directory and add the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Explanation

| Variable   | Description                        |
| ---------- | ---------------------------------- |
| PORT       | Port where the backend server runs |
| MONGO_URI  | MongoDB database connection string |
| JWT_SECRET | Secret key used for authentication |
| CLIENT_URL | Frontend application URL           |

---

# ⚙️ Installation Guide

## 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/blogverse.git
cd blogverse
```

---

# 🚀 Backend Setup

Move into the backend folder:

```
cd backend
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Backend will start on:

```
http://localhost:5000
```

---

# 💻 Frontend Setup

Open another terminal and navigate to the frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run the frontend:

```
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# 🔗 API Communication

The frontend communicates with the backend using **Axios**.

Main API operations include:

* Fetching all blogs
* Creating new blog posts
* Updating blogs
* Deleting blogs
* Liking blogs
* Adding comments
* Managing favourites

API caching is implemented to reduce unnecessary calls and improve performance.

---

# 🔒 Security Practices

The project follows several security practices:

* Password hashing
* Protected routes
* Environment variables for secrets
* Controlled CORS access
* Secure database queries

---

# 📈 Future Improvements

Planned features for future updates:

* User profile pages
* Blog search functionality
* Tags and advanced filtering
* Notifications
* Bookmark collections
* Dark mode
* Rich text editor
* Image upload support

---

# 👨‍💻 Author

**Samir Khanal**

---

# ⭐ Support

If you like this project, consider giving it a star on GitHub. It helps others discover the project and supports future improvements.
