# Blog Post Panel Project

## Overview

This project is a Blog Post Panel where users can register and log in to create, read, edit, and delete their blogs. The platform also displays blogs posted by other users. Each user has control over their own blogs while viewing others’ content without modification options.

## Project Stack

- **Frontend (UI):** EJS (Embedded JavaScript)
- **Backend:** Express.js
- **Database:** MongoDB
- **Authentication:** Passport.js (for user registration and login)
- **File Uploads:** Multer (for blog image uploads)
- **Styling:** Bootstrap (for responsive design)

## Features

### User Authentication

- **Register:** Users can create an account with a username and password.
- **Login:** Users can log in using Passport.js authentication.
- **Session Management:** Cookies/sessions to keep users logged in and manage user state.

### Blog Management

- **Add Blog:** Users can create a new blog post with a title, content, and image (image uploaded using Multer).
- **Edit Blog:** Users can edit their own blog posts with form validation.
- **Delete Blog:** Users can delete their own blog posts with a confirmation prompt.

### View Blogs

- **All Blogs Page:** A public page that shows all users' blogs, view-only (no edit/delete options).
- **My Blogs Page:** A page where logged-in users can view, edit, or delete only their own blogs.
- **Single Blog View:** Users can click on a blog to see its details and comments.

### Commenting System

- **Add Comment:** Users can leave comments on public blog posts.
- **Delete Comment:** Users can delete their own comments.

### User Profile

- **View Profile:** Users can view their profile information and a list of their blog posts.
- **Edit Profile:** Users can edit their profile details.

### Search Functionality

- **Search Blogs:** Users can search for blog posts by title or content.

## Key Routes & Logic

### User Authentication Routes

- **POST /register:** Create a new user.
- **POST /login:** Log in the user using Passport.
- **GET /logout:** Log out the user.
- **GET /profile:** View the logged-in user's profile.
- **POST /profile/edit:** Edit the user's profile.

### Blog Routes

- **GET /blogs:** View all users' blogs.
- **GET /my-blogs:** View the logged-in user’s blogs (with edit/delete options).
- **GET /blogs/:id:** View a specific blog post.
- **POST /blogs/add:** Add a new blog (with file upload).
- **POST /blogs/edit/:id:** Edit a specific blog (only by the author).
- **DELETE /blogs/delete/:id:** Delete a specific blog (only by the author).

### Comment Routes

- **POST /blogs/:id/comments:** Add a comment to a specific blog.
- **DELETE /blogs/:id/comments/:commentId:** Delete a specific comment (only by the author).

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/blog-panel-project.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd blog-panel-project
   ```

3. **Install the required dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file in the root directory and add your environment variables:**

   ```
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   ```

5. **Start the application:**

   ```bash
   npm start
   ```

6. **Open your browser and go to:**

   ```
   http://localhost:3000
   ```

## Project Structure

```
blog-panel-project/
│
├── config/             # Configuration files
│   ├── passport.js     # Passport.js configuration
│   └── db.js           # MongoDB connection
│
├── models/             # MongoDB models
│   ├── User.js         # User model
│   ├── Blog.js         # Blog model
│   └── Comment.js      # Comment model
│
├── routes/             # Route definitions
│   ├── auth.js         # Authentication routes
│   ├── blog.js         # Blog routes
│   └── comment.js      # Comment routes
│
├── views/              # EJS templates
│   ├── layouts/        # Layout templates
│   ├── auth/           # Authentication views
│   ├── blogs/          # Blog views
│   └── comments/       # Comment views
│
├── public/             # Public assets (CSS, JS, images)
│   ├── styles.css      # Custom styles
│   └── scripts.js      # Custom scripts
│
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── app.js              # Main application file
└── package.json        # Project metadata and dependencies
```

## Additional Learning Points

- Importance of user authentication and authorization.
- Handling file uploads securely with Multer.
- Structuring Express.js applications with MongoDB.
- Creating a dynamic UI with EJS.
- Implementing a commenting system for user interaction.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
