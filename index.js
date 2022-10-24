require('dotenv').config();

const express = require('express');
const xss = require('xss-clean');
const helmet = require('helmet');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const { PORT_NUMBER, DEVELOPMENT_MODE, MONGO_DB_SETTINGS } = require('./constants/constants');

const PORT = PORT_NUMBER;

const app = express();

// allowed origins
var allowedOrigins = ['http://localhost:3000'];

// cors setup
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }),
);

// middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(helmet());
app.use(xss());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes import
const appointmentRoutes = require('./routes/appointment');

// base routes definition
app.use('/api/v1/appointments', appointmentRoutes);

// import error handlers
const errorHandlers = require('./handlers/errorHandlers');
app.use(errorHandlers.mongoseErrors);

if (DEVELOPMENT_MODE === 'DEVELOPMENT') {
    app.use(errorHandlers.developmentErrors);
} else {
    app.use(errorHandlers.productionErrors);
}

// setting up the database connection and server instance creation
const startServer = async () => {
    await mongoose
        .connect(MONGO_DB_SETTINGS.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(() => {
            console.log('Server Connected to MongoDB!');
            app.listen(PORT, () => {
                console.log(`Server is up and running on port ${PORT}`);
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

app.use(express.static(path.join(__dirname, "client/build/")));
app.get("*", function (req, res) {
  return res.sendFile(path.resolve(__dirname, "client/build/", "index.html"));
});

// start the server
startServer();
