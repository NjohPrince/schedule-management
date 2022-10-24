const { check } = require('express-validator');

exports.appointmentValidator = [
    check('name').not().isEmpty().withMessage('Clients name is required.'),
    check('name').isLength({ min: 1 }).withMessage('Clients name too short.'),
    check('email').isEmail().withMessage('Please enter a valid email.'),
    check('phone').not().isEmpty().withMessage('Phone number is required.'),
    check('name').not().isEmpty().withMessage('Clients name is required.'),
    check('appointmentDate').not().isEmpty().withMessage('Appointment date is required.'),
    check('address1').not().isEmpty().withMessage('Please provide clients address.'),
];
