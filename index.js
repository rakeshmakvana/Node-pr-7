const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const path = require('path');
const authRoute = require('./routes/authRoutes');
const blogsRoute = require('./routes/blogRoutes');
const PORT = process.env.PORT || 5000;
const app = express();

mongoose.connect('mongodb://localhost:27017/Blog-Panel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.use('/', authRoute);
app.use('/', blogsRoute);

app.listen(PORT, () => console.log(`Server Started On http://localhost:${PORT}`));
