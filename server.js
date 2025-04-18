const express = require("express");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();
//Allow All Origins with Default of cor(*)
app.use(cors());

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
//port
const port = process.env.PORT || 8080;

//listen port
app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
