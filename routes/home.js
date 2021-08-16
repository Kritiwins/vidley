const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index', {title: 'My Vidley App', message: 'Hello'});
});

module.exports = router;