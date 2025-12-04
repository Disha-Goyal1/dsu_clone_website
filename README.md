# Dayananda Sagar University - Backend (Node.js + Express)

This is a simple backend server for the Dayananda Sagar University frontend
you uploaded. It uses **Node.js** and **Express** and also serves the same
frontend from the `public` folder.

## Requirements

- Node.js (v16+ recommended)
- npm (comes with Node.js)

## How to run

1. Extract this ZIP file.
2. Open a terminal in the extracted folder (where `package.json` is).
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open your browser and visit:

   - Frontend + backend: http://localhost:5000
   - API root: http://localhost:5000/api
   - University info: http://localhost:5000/api/university
   - Departments: http://localhost:5000/api/departments
   - Placements: http://localhost:5000/api/placements

## Contact API (example)

You can send a POST request to:

- `POST http://localhost:5000/api/contact`

with JSON body:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "Hello from DSU site"
}
```

The messages are stored only in memory (for demo), not in a database.

You can modify `server.js` to connect to a real database (MySQL, MongoDB, etc.)
if required for your project or assignment.
