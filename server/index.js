const express = require('express');
const { PORT_NUMBER, STATUS_CODES } = require('./constants/constants');

const PORT = PORT_NUMBER;

const app = express();

app.use('/', (req, res) => {
    res.status(STATUS_CODES.SUCCESS.SUCCESSFUL_REQUEST).json({ message: 'API By TheUnicornDev237.' });
});

app.listen(PORT, () => {
    console.log(`Server is up and running at PORT ${PORT}`);
});
