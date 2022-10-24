// routes
const express = require('express');
const router = express.Router();

// controllers
const appointmentController = require('../controllers/appointmentController');

// validators
const { appointmentValidator } = require('../validators/appointment');
const { runValidators } = require('../validators');

router.post('/', appointmentValidator, runValidators, appointmentController.createAppointment);
router.get('/', appointmentController.getAllAppointments);
router.get('/stats', appointmentController.getStats);
router.get('/:id', appointmentController.getSingleAppointment);
router.put('/:id', appointmentValidator, runValidators, appointmentController.updateAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;
