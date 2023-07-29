const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('this is todoist');
});

module.exports = router;