const Blog = require('../models/Blog');
const upload = require('../config/multer')

const getAllBlogs = async (req, res) => {
    const blogs = await Blog.find().populate('author');
    res.render('index', { blogs });
};

const getMyBlogs = async (req, res) => {
    const blogs = await Blog.find({ author: req.user.id });
    res.render('myBlogs', { blogs });
};

const getAddBlog = (req, res) => {
    res.render('add');
};

const addBlog = async (req, res) => {
    upload.single('image')(req, res, async (err) => {
        if (err) {
            return res.redirect('/add');
        }
        const { title, content } = req.body;
        const newBlog = new Blog({
            title,
            content,
            image: req.file ? `${req.file.filename}` : '',
            author: req.user.id,
        });
        await newBlog.save();
        res.redirect('/myBlogs');
    });
};

const getEditBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (!blog || blog.author != req.user.id) {
        return res.redirect('/myBlogs');
    }
    res.render('edit', { blog });
};

const editBlog = async (req, res) => {
    let blog = await Blog.findById(req.params.id);
    if (!blog || blog.author != req.user.id) {
        return res.redirect('/myBlogs');
    }
    blog.title = req.body.title;
    blog.content = req.body.content;
    if (req.file) {
        blog.image = `${req.file.filename}`;
    }
    await blog.save();
    res.redirect('/myBlogs');
};


const deleteBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (!blog || blog.author != req.user.id) {
        return res.redirect('/myBlogs');
    }
    await blog.deleteOne();
    res.redirect('/myBlogs');
};

module.exports = { getAllBlogs, getMyBlogs, getAddBlog, addBlog, getEditBlog, editBlog, deleteBlog };