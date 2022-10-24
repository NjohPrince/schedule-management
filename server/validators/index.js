const { validationResult } = require('express-validator');
const { STATUS_CODES } = require('../constants/constants');

exports.runValidators = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(STATUS_CODES.ERROR.VALIDATION_ERRORS).json({ error: errors.array()[0].msg });
    }
    next();
};
