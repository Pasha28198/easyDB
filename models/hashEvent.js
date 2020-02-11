const mongeese = require('mongoose');

const eventSchema = new mongeese.Schema({
    event: {
        type: String,
        require: true,
        trim: true
    },
    eventName: {
        type: String,
        require: true,
        minLength: 7,
    },
});

const Event = mongeese.model('HashEvent', eventSchema);

module.exports = Event;
