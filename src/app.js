const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();

// �� ���� ����
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// �̵���� ����
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// ���Ʈ ����
const authRoutes = require("./routes/authRoutes");
app.use(authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
