# FoodBridge 🤝🥘

FoodBridge is a web-based platform designed with a core mission: **to eliminate food wastage by connecting surplus food from restaurants, events, and individuals with those in need (students, NGOs, and the community)**. Instead of throwing away perfectly good food, FoodBridge provides a seamless way to donate, claim, and distribute it, ensuring no meal goes to waste.

## 🌟 Key Features

### For Students / Recipients (`studentpage.html`)
* **Real-Time Food Discovery**: Browse available food donations nearby.
* **Smart Filtering**: Filter available meals by price (free or affordable) and distance.
* **Easy Ordering system**: Claim food items and choose payment methods (Online/Cash on Pickup).
* **QR Code Verification**: Generates a secure QR code upon ordering for easy pickup verification at the location.

### For Staff / Admins (`staff.html`)
* **Centralized Dashboard**: Manage incoming donations, active volunteers, and partner NGOs.
* **Logistics Tracking**: View pending pickups and urgent food requests.
* **Donation History**: Track recent donations with timestamps and details.

### Landing Page (`index.html`)
* **Impact Tracking**: Beautiful landing page showing real-world impact (meals served, CO2 saved, people helped).
* **Role-Based Login System**: Secure authentication to direct users to their specific dashboard based on their role (Student vs. Staff).

### Backend Server (`server.js`)
* **Node.js & Express**: Handles API requests smoothly.
* **MySQL Database**: Manages user authentication securely.

---

## 🛠️ Technology Stack

* **Frontend:**
  * HTML5, CSS3, JavaScript (Vanilla JS for logic)
  * [TailwindCSS](https://tailwindcss.com/) (via CDN for rapid, responsive styling)
  * [Lucide Icons](https://lucide.dev/) (for crisp, modern SVG icons)
  * [Qrious](https://github.com/neocotic/qrious) (for generating QR codes on the client side)
* **Backend:**
  * [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/) (REST API)
  * [MySQL2](https://www.npmjs.com/package/mysql2) (Database connection)
  * [Cors](https://www.npmjs.com/package/cors) & [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) (Security & Authentication)

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

* [Node.js](https://nodejs.org/en/download/) installed
* [MySQL](https://dev.mysql.com/downloads/installer/) Server installed and running

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
   ```

2. **Setup the Database:**
   * Open your MySQL client (like MySQL Workbench).
   * Create a database named `foodshare_db`.
   * Create a `users` table with the following structure:
     ```sql
     CREATE TABLE users (
         id INT AUTO_INCREMENT PRIMARY KEY,
         username VARCHAR(255) NOT NULL,
         password VARCHAR(255) NOT NULL,
         role ENUM('student', 'staff') NOT NULL
     );
     ```
   * Insert some dummy data for testing:
     ```sql
     INSERT INTO users (username, password, role) VALUES ('student1', '123', 'student');
     INSERT INTO users (username, password, role) VALUES ('staff1', '123', 'staff');
     ```

3. **Configure the Backend:**
   * Navigate to the `server` directory:
     ```bash
     cd server
     ```
   * Install backend dependencies:
     ```bash
     npm install
     ```
   * *Important*: Open `server.js` and update the MySQL connection details (user, password) to match your local MySQL setup.

4. **Run the Server:**
   ```bash
   node server.js
   ```
   *The server should now be running on `http://localhost:3000`.*

5. **Run the Frontend:**
   * Simply open the `index.html` file in your preferred web browser, or use an extension like VSCode Live Server.

---

## 💡 How It Works

1. **Donors** (restaurants, events) have surplus food.
2. The food details are uploaded to the platform.
3. **Students/Needy individuals** log in, browse the available food nearby, and place a claim/order.
4. The user receives a **QR Code** which they take the pickup location.
5. The food is successfully handed over, preventing wastage.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
If you want to contribute to this project to help eliminate food waste:
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
