
const express = require('express');
const ps4Router = require('./ps4'); // Import the router

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/ps4', ps4Router); // Use the router

app.listen(port, () => {
  console.log(`Server running on http://localhost:${1000}`);
});
