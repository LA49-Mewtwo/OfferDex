const express = require("express");
const path = require("path");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const offerRouter = require("./routers/offerRouter");
const interviewRouter = require("./routers/interviewRouter");
const companyInfoRouter = require("./routers/companyInfoRouter");
const PORT = 3000;

const app = express();

// use CORS
app.use(cors({ credentials: true, origin: "http://localhost:8080" }));
// convert json body
app.use(express.json());

// serve static routes
app.use(express.static(path.resolve(__dirname, "../dist")));

// //serve index.html to /
//  app.get("/", (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, "../dist/index.html"));
//  });



//serve index.html to /
// app.get("/", (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
// });

// Proxied endpoints from webpack frontend:
// "/users", "/offers"

app.use("/users", userRouter);

app.use("/offers", offerRouter);

app.use("/interviews", interviewRouter);

app.use("/companyInfo", companyInfoRouter);

//catch-all route error handler
app.use((req, res) => {
  res.status(404).send("Sorry, cannot find that specific route");
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught UNKNOWN middleware error",
    status: 402,
    message: { err: "Express error handler caught UNKNOWN middleware error" },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//have server listen on PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
