const User = require('../models/User');
const passport = require('passport');
const bcrypt = require('bcryptjs');
require('../config/passport')(passport);


const registerForm = (req, res) => {
    res.render('register');
}

const register = async (req, res) => {
    const { username, email, password, password2 } = req.body;
    let errors = [];
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match' });
    }
    if (errors.length > 0) {
        res.render('register', { errors, username, email });
    } else {
        const user = await User.findOne({ email });
        if (user) {
            errors.push({ msg: 'Email already registered' });
            res.render('register', { errors, username, email });
        } else {
            const newUser = new User({ username, email, password });
            await newUser.save();
            res.redirect('/login');
        }
    }
};

const loginForm = (req, res) => {
    res.render('login');
}

const login = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/myBlogs',
        failureRedirect: '/login',
    })(req, res, next);
};

const logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.redirect('/'); 
        }
        res.redirect('/login');
    });
};


module.exports = { register, login, logout, registerForm, loginForm };