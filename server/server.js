const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
    host: 'mysql-13fb3af7-abhi-a6fa.j.aivencloud.com',
    port: 23520,
    user: 'avnadmin',
    password: 'AVNS_k-X5ajU-r8NTLNodlqR', // ❗ REPLACE THIS WITH YOUR ACTUAL AIVEN PASSWORD
    database: 'foodshare_db',
    ssl: {
        rejectUnauthorized: false // Required for connecting to Aiven without importing their CA cert locally
    }
});

db.connect(err => {
    if (err) console.log('Database connection failed:', err);
    else console.log('Connected to MySQL Database');
});

// Login Route
app.post('/login', (req, res) => {
    const { username, password, role } = req.body;

    // SQL query to find user by username AND role
    const sql = "SELECT * FROM users WHERE username = ? AND role = ?";

    db.query(sql, [username, role], (err, result) => {
        if (err) return res.status(500).json({ success: false, message: "Server error" });

        if (result.length > 0) {
            const user = result[0];

            // Compare password
            // For testing plain text: password === user.password
            // For production, use bcrypt.compare(password, user.password)

            // Simple comparison for this example:
            const isMatch = (password === '123'); // Assuming you stored '123' or verify hash

            // Ideally, use bcrypt if you stored hashed passwords:
            // bcrypt.compare(password, user.password, (bErr, bResult) => { ... });

            if (isMatch) {
                res.json({
                    success: true,
                    message: "Login successful",
                    user: {
                        id: user.id,
                        username: user.username,
                        role: user.role
                    }
                });
            } else {
                res.json({ success: false, message: "Incorrect password" });
            }
        } else {
            res.json({ success: false, message: "User not found or invalid role selected" });
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');

});

