const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('We are on post');
});

router.get('/specfic', (req, res) => {
    res.send('Specfic post');
});

// request without async, try, catch
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

// request with async, try, catch
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