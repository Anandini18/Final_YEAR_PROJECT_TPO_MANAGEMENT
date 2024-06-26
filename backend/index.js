const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
dotenv.config({ path: "./config.env" });
require("./db/config");
const PORT = process.env.PORT || 8080;
const userRoute = require("./routes/studentuser");
const employeeRoute = require("./routes/employeruser");
const employerInfo = require('./routes/employerInfo');
const documentRoute = require("./routes/Documents");
const jobRoute = require("./routes/Jobnotify");
const eventRoute = require("./routes/Eventnotify");
const userDataRoute = require("./routes/StudentInfo");
const MailRoute = require("./routes/sendEmail");
const bodyParser = require('body-parser');
const FacultyRoute = require("./routes/importCsvfile");
const JobApplyRoute = require("./routes/Applyjobs");

app.use(bodyParser.json({ limit: '50mb' }));

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use("/userapi", userRoute);
app.use("/employapi", employeeRoute);
app.use("/employInfoapi", employerInfo);
app.use("/dataapi", userDataRoute);
app.use("/jobapi", jobRoute);
app.use("/eventapi", eventRoute);
app.use("/docapi", documentRoute);
app.use("/mailapi", MailRoute);
app.use("/enroll", FacultyRoute);
app.use("/applyjobapi", JobApplyRoute);

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
