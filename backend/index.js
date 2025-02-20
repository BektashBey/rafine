const cors = require("cors")
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const todoRoutes = require("./routes/todos");

const PORT = 8000;

const app = express();

mongoose
  .connect(
    "mongodb+srv://ozangunduzozan69:lmZSNlFkEivctv0V@cluster0.4k8kx.mongodb.net/"
  )
  .then(() => console.log("database'a bağlandı"))
  .catch((e) => console.log("database'e bağlanamdı", e));

app.use(cors());

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});
