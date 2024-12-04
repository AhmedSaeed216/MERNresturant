# Ahmed's Kitchen 🍽️

A full-stack restaurant application for managing reservations, showcasing menu items, and enhancing customer experience. The app features a React frontend, Node.js backend, and MongoDB for database management.

---

## 🌟 Features

### Frontend
- Fully responsive design with smooth navigation.
- Interactive sections:
  - **Hero Section**: Catchy introduction.
  - **About Us**: Details about the restaurant.
  - **Our Qualities**: Highlighting the strengths.
  - **Team**: Showcasing the team behind the restaurant.
  - **Reservation**: Easy reservation system.
- Dynamic animations for better user experience.
- Smooth scrolling to sections.
- Hamburger menu for mobile navigation.

### Backend
- Node.js and Express.js backend for reservation handling.
- MongoDB for database management.
- API endpoints for:
  - **Reservation**: Add, update, delete reservations.
  - **Menu Items**: Manage dish details.

---

## 🛠️ Tech Stack

### Frontend
- **React.js**: Component-based UI framework.
- **CSS**: Custom styles for a polished look.
- **React-Scroll**: Smooth scrolling and navigation.

### Backend
- **Node.js**: Backend runtime.
- **Express.js**: Web framework for API routes.
- **MongoDB**: Database for storing reservations, menu, and user data.

### Tools
- **React Icons**: For beautiful icons.
- **REST API**: For communication between frontend and backend.
- **JSON Data**: For static content.

---

## 🖥️ Installation

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/ahmeds-kitchen.git
   cd ahmeds-kitchen
   ```

2. **Install Dependencies:**
   ```bash
   # For frontend
   cd client
   npm install
   
   # For backend
   cd ../server
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the `server` directory and add the following:
   ```env
   MONGO_URI=your-mongodb-connection-string
   PORT=5000
   ```

4. **Run the Application:**
   ```bash
   # Start backend
   cd server
   npm start
   
   # Start frontend
   cd ../client
   npm start
   ```

5. **Open the App:**
   Visit [http://localhost:3000](http://localhost:3000) to view the frontend.

---

## 🚀 API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| `GET`  | `/api/reservations` | Fetch all reservations. |
| `POST` | `/api/reservations` | Add a new reservation.  |
| `DELETE` | `/api/reservations/:id` | Delete a reservation by ID. |
| `PUT` | `/api/reservations/:id` | Update a reservation. |

---

## 📂 Project Structure

```
ahmeds-kitchen/
├── client/                 # Frontend
│   ├── public/             # Static files
│   ├── src/                # React components
│   ├── restApi.json        # Static JSON data
│   └── ...                
├── server/                 # Backend
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── app.js              # Express app
│   ├── .env                # Environment variables
│   └── ...
├── README.md               # Documentation
└── ...
```

---

## 👨‍💻 Contributing

1. Fork the project.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 📧 Contact

If you have any questions, feel free to reach out!

- **Author**: Ahmed Saeed  
- **Portfolio**: [Ahmed Saeed Portfolio](https://ahmedsaeedportfolio.netlify.app/)  
- **Email**: your-email@example.com  

---
