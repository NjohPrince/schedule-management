const Appointment = require('../models/appointmentModel');
const { STATUS_CODES } = require('../constants/constants');

// populate mongoose options ~to be exploited
//   path: 'key_with_ref',
//   model: 'model_name',
//   select: 'field_name, field_name',

exports.createAppointment = async (req, res, next) => {
    try {
        console.log('REQUEST_DATA: ', req.body);

        const newAppointment = new Appointment(req.body);

        await newAppointment.save();

        res.json({ message: 'Appointment successfully created.' }).status(STATUS_CODES.SUCCESS.CREATED_SUCCESSFULLY);
    } catch (err) {
        console.log(err?.message);
        res.status(STATUS_CODES.ERROR.SERVER_ERROR).send({
            error: err.message || 'A server error occured.',
        });
    }
};

exports.getStats = async (req, res, next) => {
    try {
        const pending = await Appointment.find({ appointmentStatus: 'Pending' }).count();
        const rescheduled = await Appointment.find({ appointmentStatus: 'Rescheduled' }).count();
        const passed = await Appointment.find({ appointmentStatus: 'Completed' }).count();

        const stats = {
            pending,
            rescheduled,
            passed,
        };

        res.json({ stats }).status(STATUS_CODES.SUCCESS.SUCCESSFUL_REQUEST);
    } catch (err) {
        console.log(err?.message);
        res.status(STATUS_CODES.ERROR.SERVER_ERROR).send({
            error: err.message || 'A server error occured.',
        });
    }
};

exports.getAllAppointments = async (req, res, next) => {
    try {
        const appointments = await Appointment.find({});
        res.json({ appointments }).status(STATUS_CODES.SUCCESS.SUCCESSFUL_REQUEST);
    } catch (err) {
        console.log(err?.message);
        res.status(STATUS_CODES.ERROR.SERVER_ERROR).send({
            error: err.message || 'A server error occured.',
        });
    }
};

exports.getSingleAppointment = async (req, res, next) => {
    try {
        const appointmentId = req.params.id;
        const appointment = await Appointment.findById(appointmentId);

        if (!appointment) return res.status(STATUS_CODES.ERROR.NOT_FOUND).json({ error: 'Appointment not found.' });

        res.status(STATUS_CODES.SUCCESS.SUCCESSFUL_REQUEST).json({
            appointment,
        });
    } catch (err) {
        console.log(err?.message);
        res.status(STATUS_CODES.ERROR.SERVER_ERROR).send({
            error: err.message || 'A server error occured.',
        });
    }
};

exports.updateAppointment = async (req, res, next) => {
    try {
        const data = req.body;
        const appointmentId = req.params.id;

        await Appointment.findByIdAndUpdate(appointmentId, {
            $set: { data },
        });
        return res.status(STATUS_CODES.SUCCESS.CREATED_SUCCESSFULLY).json({ message: 'Test Message' });
    } catch (err) {
        console.log(err?.message);
        res.status(STATUS_CODES.ERROR.SERVER_ERROR).send({
            error: err.message || 'A server error occured.',
        });
    }
};

exports.deleteAppointment = async (req, res, next) => {
    try {
        const appointmentId = req.params.id;

        const appointment = await Appointment.findById(appointmentId);

        if (!appointment)
            return res
                .status(STATUS_CODES.ERROR.NOT_FOUND)
                .json({ error: 'Appointment not found. Might have been deleted.' });

        await Appointment.findByIdAndDelete(appointmentId);

        res.status(STATUS_CODES.SUCCESS.SUCCESSFUL_REQUEST).json({
            message: 'Appointment successfully deleted',
        });
    } catch (err) {
        console.log(err?.message);
        res.status(STATUS_CODES.ERROR.SERVER_ERROR).send({
            error: err.message || 'A server error occured.',
        });
    }
};
