// user model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema(
    {
        uniqueCode: {
            type: String,
            required: true,
        },
        clientName: {
            type: String,
            required: true,
        },
        sex: {
            type: String,
            default: 'Male',
            enum: ['Male', 'Female'],
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        address1: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        appointmentDate: {
            type: String,
            required: true,
        },
        firstTime: {
            type: String,
            required: true,
        },
        requestDate: {
            type: String,
            required: true,
        },
        appointmentStatus: {
            type: String,
            default: 'Pending',
            enum: ['Pending', 'Completed', 'Rescheduled'],
        },
        appointmentTime: {
            type: String,
            required: true,
        },
        noteAfterAppointment: {
            type: String,
        },
        noteBeforeAppointment: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);
