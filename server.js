const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json());

// --- SIMPLE IN-MEMORY STORAGE (for demo only) ---
const contactMessages = [];

// --- SAMPLE DATA ENDPOINTS ---
const universityInfo = {
  name: "Dayananda Sagar University",
  location: "Harohalli, Bangalore - 562112, India",
  phone: "+91 80 4646 1800",
  email: "info@dsu.edu.in",
  website: "https://www.dsu.edu.in",
  established: 2014,
  description: "Dayananda Sagar University (DSU) is a private university in Bangalore focusing on engineering, management, health sciences and more."
};

const departments = [
  {
    id: 1,
    name: "Computer Science and Engineering",
    level: "Undergraduate",
    degree: "B.Tech",
    intake: 120,
    description: "Focuses on core computer science, software engineering, AI and data science."
  },
  {
    id: 2,
    name: "Electronics and Communication Engineering",
    level: "Undergraduate",
    degree: "B.Tech",
    intake: 120,
    description: "Covers embedded systems, communication systems and VLSI design."
  },
  {
    id: 3,
    name: "Mechanical Engineering",
    level: "Undergraduate",
    degree: "B.Tech",
    intake: 60,
    description: "Teaches core mechanical concepts, design and manufacturing."
  },
  {
    id: 4,
    name: "MBA",
    level: "Postgraduate",
    degree: "MBA",
    intake: 60,
    description: "Postgraduate program in management and leadership."
  }
];

const placements = {
  year: 2025,
  highestCTC: 2500000, // in INR
  averageCTC: 650000,
  totalOffers: 500,
  topCompanies: [
    "Amazon",
    "Microsoft",
    "IBM",
    "Infosys",
    "TCS",
    "Google"
  ]
};

// --- API ROUTES ---

// Health check / root API
app.get('/api', (req, res) => {
  res.json({
    status: 'ok',
    message: 'DSU backend is running',
    endpoints: [
      "/api/university",
      "/api/departments",
      "/api/placements",
      "/api/contact (POST)"
    ]
  });
});

app.get('/api/university', (req, res) => {
  res.json(universityInfo);
});

app.get('/api/departments', (req, res) => {
  res.json(departments);
});

app.get('/api/placements', (req, res) => {
  res.json(placements);
});

// Simple contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "name, email and message are required"
    });
  }

  const newMessage = {
    id: contactMessages.length + 1,
    name,
    email,
    message,
    createdAt: new Date().toISOString()
  };

  contactMessages.push(newMessage);

  return res.status(201).json({
    success: true,
    message: "Contact message received",
    data: newMessage
  });
});

// --- STATIC FRONTEND SERVING ---
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

// For any other route, send the main index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

// --- START SERVER ---
app.listen(PORT, () => {
  console.log(`DSU backend server running on http://localhost:${PORT}`);
});
