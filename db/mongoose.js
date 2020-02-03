const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/events', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log('MongoDB connected')
})
.catch( err => console.log('MongoDB not connected') );
