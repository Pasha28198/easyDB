const mongeese = require('mongoose');

const eventSchema = new mongeese.Schema({
    event: {
        type: String,
        require: true,
        trim: true
    },
    eventValue: {
        type: String,
        require: true,
        minLength: 7,
    },
});

const EventGloabal = mongeese.model('EventGloabal', eventSchema);

module.exports = EventGloabal;