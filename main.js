const express = require("express");
const app = express();
const port = 8000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require("./routes"));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
