const express = require("express");
var cors = require('cors')
const userRouter = require("./Routers/userRouter");

let app = express();

app.use(cors());

require("./configs/database");

app.use(express.json());
app.use("/user", userRouter);

app.listen(8000);
