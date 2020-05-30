const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Default get method
// router.get('/', (req, res) => {
//     res.send('We are on post');
// });

// Get the data from db
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.json({ message: err });
    }
});

router.get('/specfic', (req, res) => {
    res.send('Specfic post');
});

// submit without async, try, catch
// router.post('/', (req, res) => {
//     // console.log(req.body);
//     // res.send(req.body);
    
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });

//     post.save()
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.json({ message: err });
//         })
//     // res.send(post);
// });

// submit with async, try, catch
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json({ message: err });
    }
});

module.exports = router;