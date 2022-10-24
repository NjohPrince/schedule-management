export interface BaseUserEntityType {
    uniqueCode: string;
    // A[SN][DD][MM][YY] code format
    // SN ~ Serial number
    // DD ~ 01-31 - Day of the appointment
    // MM ~ 01-12 - Month of the appointment
    // YY ~  - Year of the appointment

    sex: string;
    clientName: string;
    phone: string;
    email: string;
    address1: string;
    city: string;
    firstTime: string;
}

export interface AppointmentEntityType extends BaseUserEntityType {
    appointmentDate: string;
    requestDate: string;
    appointmentStatus: string;
    appointmentTime: string;
    noteAfterAppointment: string;
    noteBeforeAppointment: string;
}
