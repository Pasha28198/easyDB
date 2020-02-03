const express = require('express');
const Event = require('../models/localEvents');
const GlobalEvent = require('../models/globalEvents');

const router = new express.Router();

router.post('/event', async (req, res) => {
    let event;

    try {
        if (req.body.email) {
            event = new GlobalEvent(req.body);
        } else {
            event = new Event(req.body);
        }
        await event.save();
        res.send(event);
    } catch (e) {
        res.status(500).send(e);
    }

});

router.get('/event/:email/:event', async (req, res) => {
    const { email, event } = req.params;

    try {
        const eventUser = await GlobalEvent.find({ email, event });
        res.send(eventUser);
    } catch(e) {
        res.status(500).send(e);
    }
});

router.get('/event/:eventName', async (req, res) => {
    const { eventName } = req.params;

    try {
        const event = await Event.find({ eventName });
        res.send(event);
    } catch(e) {
        res.status(500).send(e);
    }
});


module.exports = router;
