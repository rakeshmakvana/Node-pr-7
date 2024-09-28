const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const ensureAuthenticated = require('../config/auth');
const upload = require('../config/multer');

router.get('/', blogController.getAllBlogs);
router.get('/myBlogs', ensureAuthenticated, blogController.getMyBlogs);
router.get('/add', ensureAuthenticated, blogController.getAddBlog);
router.post('/add', ensureAuthenticated, blogController.addBlog);
router.get('/edit/:id', ensureAuthenticated, blogController.getEditBlog);
router.post('/edit/:id', ensureAuthenticated, upload.single('image'), blogController.editBlog);
router.get('/delete/:id', ensureAuthenticated, blogController.deleteBlog);

module.exports = router;
