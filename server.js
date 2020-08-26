const express = require('express');
const app = express();

const port = 1237;

// Middleware
app.use( express.static(__dirname + '/frontend') ) // Allt i denna mapp routas automatiskt


// Routes
// (error handeling)
// Start server
app.listen(port, () => console.log('Server is listening on port ' + port)); // Måste ligga sist