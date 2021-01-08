const router = require('express').Router();
const controller = require('../controllers/reminders');

router.post('/', controller.addReminder);

router.get('/', controller.getAllReminders);

router.get('/:id', controller.getReminder);

router.delete('/:id', function(req, res, next) {
    res.status(405).send();
});

router.put('/:id', function(req, res, next) {
    res.status(405).send();
});

router.patch('/:id', function(req, res, next) {
    res.status(405).send();
});


module.exports = router;
