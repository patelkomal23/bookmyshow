# 🎬 NodeJs-BookMyShow

A complete **Node.js + Express + MongoDB Movie Management Application** that allows you to add, edit, delete, and list movies with trailer management, image uploads, and EJS-powered views.  
The project follows an **MVC architecture** for clean code separation.

---

## 🚀 Features
- 📌 Add, Edit, Delete, and List Movies  
- 🎞 Manage Movie Trailers (YouTube links or uploaded files)  
- 🖼 Image Uploads (Posters, Thumbnails) with Multer  
- 🗂 Organized MVC folder structure  
- 🛠 MongoDB (Mongoose) for database operations  
- 🎨 EJS Views with Bootstrap for UI  
- 🔐 Middleware for image handling and errors  

---

## 📂 Folder Structure


NodeJs-Movie/
├── assets/ # Static files (CSS, JS, images) used in EJS views
```
├── configs/ # Configuration (e.g., MongoDB connection)
├── controllers/ # Business logic for Movies, Trailers, Home
├── middleware/ # Custom middleware (file upload, error handling)
├── models/ # Mongoose schemas (Movie, Trailer, User if added)
├── routers/ # Express route definitions grouped by feature
├── uploads/ # Uploaded files (posters, thumbnails)
├── views/ # EJS templates for UI
│ ├── pages/ # Full page views (addMovie, listMovie, trailers, etc.)
│ └── partials/ # Reusable partials (header, footer, navbar)
├── index.js # Entry point, sets up Express server
├── package.json # Dependencies and project metadata


---

## 📖 Detailed Documentation of Each Folder

### 1️⃣ assets/
Contains static frontend resources:
- **CSS** → Custom styling, Bootstrap overrides  
- **JS** → Frontend interactivity (form validation, UI tweaks)  
- **Images** → Default posters, app icons  

### 2️⃣ configs/
Example: `db.js`

```js
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ DB Connection Failed:", err));

3️⃣ controllers/

🎬 movie.controller.js → Handles add, edit, update, delete movies

🎞 trailer.controller.js → Handles trailer logic

🏠 home.controller.js → Renders dashboard and homepage
...

⚙️ Installation & Setup

# 1. Clone Repository
git clone https://github.com/PayalPatel03/bookMyShow
cd NodeJs-Movie

# 2. Install Dependencies
npm install

# 3. Create .env File
PORT=1503
MONGO_URI=mongodb://localhost:27017/movies

# 4. Run Project
npm run dev
Server runs at: http://localhost:1503


📊 MVC Architecture

Model → Defines database schema (Movie, Trailer)

View → EJS templates for UI

Controller → Business logic connecting models and views

Router → Maps URL requests to controllers