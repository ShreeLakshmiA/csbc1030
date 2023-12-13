const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", require("./routes/users"));

app.listen(port, () => console.log(`Application running in port ${port}`));