const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const db = require("./models");
require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const testimonialsRouter = require("./routes/testimonials");
const entryRouter = require("./routes/entries");
const newsRouter = require("./routes/news");
const organizationRouter = require("./routes/organizations");
const activitiesRouter = require("./routes/activities");
const contactsRouter = require("./routes/contacts");
const categoriesRouter = require("./routes/categories");
const membersRouter = require("./routes/members");
const app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/testimonials", testimonialsRouter);
app.use("/news", newsRouter, entryRouter);
app.use("/users", usersRouter);
app.use("/organizations", organizationRouter);
app.use("/activities", activitiesRouter);
app.use("/contacts", contactsRouter);
app.use("/categories", categoriesRouter);
app.use("/members", membersRouter);

// app.use("/news", entryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

db.sequelize.sync();

module.exports = app;
