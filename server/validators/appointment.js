const { check } = require('express-validator');

exports.appointmentValidator = [
    check('clientName').not().isEmpty().withMessage('Clients name is required.'),
    check('clientName').isLength({ min: 1 }).withMessage('Clients name too short.'),
    check('email').isEmail().withMessage('Please enter a valid email.'),
    check('phone').not().isEmpty().withMessage('Phone number is required.'),
    check('appointmentDate').not().isEmpty().withMessage('Appointment date is required.'),
    check('address1').not().isEmpty().withMessage('Please provide clients address.'),
    check('requestDate').not().isEmpty().withMessage('Request date is needed.'),
    check('appointmentTime').not().isEmpty().withMessage('Appointment time is required.'),
];
