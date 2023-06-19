const express = require("express");
const cors = require("cors");
const app = express();


global.__basedir = __dirname;

var corsOptions = {
  origin: "*"
};



const db = require("./model");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


app.use(cors(corsOptions));

const initRoutes = require("./routes/routes");

app.use(express.json());



const PORT =  8080;

// require("./routes/catogary.routes")(app);

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});  