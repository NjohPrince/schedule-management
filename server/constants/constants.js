require('dotenv').config();

module.exports = {
    MONGO_DB_SETTINGS: {
        MONGO_URI: process.env.MONGO_URI,
    },
    PORT_NUMBER: process.env.PORT || 8000,
    DEVELOPMENT_MODE: process.env.ENV,
    STATUS_CODES: {
        ERROR: {
            FORBIDDEN: 403,
            UNAUTHORIZED: 401,
            BAD_REQUEST: 400,
            NOT_FOUND: 404,
            SERVER_ERROR: 500,
            METHOD_NOT_ALLOWED: 405,
            VALIDATION_ERRORS: 422,
            REQUEST_CONTROL: 429,
            UNSUPPORTED_MEDIA_FORMAT: 415,
            MOVER_PERMANENTLY: 301,
            MOVED_TEMPORARILY: 302,
            ACCOUNT_SUSPENDED: 410,
        },
        SUCCESS: {
            SUCCESSFUL_REQUEST: 200,
            CREATED_SUCCESSFULLY: 201,
        },
    },
};
