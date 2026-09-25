// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const { sendMail } = require('./utils/EmailUtil');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middlewares
// app.use(bodyParser.json({ limit: '10mb' }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// // APIs
// app.use('/api/admin', require('./api/admin.js'));
// app.use("/api/auth",require("./api/testEmail.js"));
// app.use('/api/customer', require('./api/customer.js'));

// app.get('/hello', (req, res) => {
//   res.json({ message: 'Hello from server!' });
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// API Routes
app.use('/api/admin', require('./api/admin'));
app.use('/api/customer', require('./api/customer'));

// --- DEPLOYMENT CONFIGURATION ---

// 1. Serve client-admin static files
app.use('/admin', express.static(path.resolve(__dirname, '../client-admin/build')));

// Use Splat/Named Parameter syntax for Express 5 compatibility
app.get('/admin/{*splat}', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client-admin/build', 'index.html'));
});

// 2. Serve client-customer static files
app.use('/', express.static(path.resolve(__dirname, '../client-customer/build')));

// Catch-all route for SPA routing
app.get('{*splat}', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client-customer/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});