const Reminders = require('../models/reminders');
const { Op } = require('sequelize');

const addReminder = async ( req, res, next ) => {

    const { user, description, date } = req.body;
    const reminder = {
        "user": user,
        "description": description,
        "date": date
    }

    const myReminder = await Reminders.create(reminder)

    res.status(201).send({
        "id": myReminder.id,
        "user": myReminder.user,
        "description": myReminder.description,
        "date": myReminder.date
    })
}

const getAllReminders = ( req, res, next ) => {
    const user = req.query.user ? req.query.user : null;
    const after = req.query.after ? req.query.after : null;

    let myQuery = {
        "where": {}
    };
    if (user) {
        myQuery['where']['user'] = { [Op.eq]: user }
    }
    if (after) {
        myQuery['where']['date'] = { [Op.gte]: parseInt(after) }
    }

    Reminders.findAll(myQuery)
        .then(resp => {
            res.status(200).send(resp)
        });
}

const getReminder = ( req, res, next ) => {
    const id = req.params.id;
    let myQuery = {
        "where": { 'id': { [Op.eq]: id } }
    };

    Reminders.findOne(myQuery)
        .then(resp => resp
            ? res.status(200).send(resp)
            : res.status(404).send('ID not found'))
}


module.exports = {
    addReminder,
    getAllReminders,
    getReminder
}
