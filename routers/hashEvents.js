const express = require('express');
const HashEvent = require('../models/hashEvent');


const router = new express.Router();

router.post('/hash_event', async (req, res) => {
    const { event, eventName } = req.body;
    console.log('work');

    try {
        const eventUpdate = await HashEvent.findOne({ eventName });

        if (eventUpdate) {
            eventUpdate.event = event;
            await eventUpdate.save();
    
            res.send(eventUpdate);
        }
    
        const newEvent = new HashEvent(req.body);
        await newEvent.save();

        res.send(newEvent);
    } catch(e) {
        res.status(400).send(e)
    }
});

router.get('/hash_event/:eventName', async (req, res) => {
    const { eventName } = req.params;

    try {
        const hashEvent = await HashEvent.findOne({ eventName });

        if (hashEvent) {
            res.status(404).send(e);
        }
        
        res.send(hashEvent);
    } catch(e) {
        res.status(404).send(e);
    }
});



module.exports = router;
