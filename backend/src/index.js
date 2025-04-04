const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Book Management App Backend');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
