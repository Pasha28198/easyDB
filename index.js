const express = require('express');
require('./db/mongoose');
const eventRouter = require('./routers/events');

const app = express();
const port = 8000;

app.use(express.json());
app.use(eventRouter);

app.listen(port, () => {
    console.log('Server started on http://localhost:' + port);
});
