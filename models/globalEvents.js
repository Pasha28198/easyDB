const mongeese = require('mongoose');

const eventSchema = new mongeese.Schema({
    email: {
        type: String,
        require: true,
    },
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

const Event = mongeese.model('Event', eventSchema);

module.exports = Event;
