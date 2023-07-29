const router = require('express').Router();

router.get('/todolist', (req, res) => {
    res.send('this is todoist');
});

module.exports = router;