export interface BaseUserEntityType {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
}

export interface PatientEntityType extends BaseUserEntityType {
    address: string;
    age: string;
    sex: string;
    comment: string;
    appointmentCode: string;
    // A[SN][DD][MM][YY] code format
    // SN ~ Serial number
    // DD ~ 01-31 - Day of the appointment
    // MM ~ 01-12 - Month of the appointment
    // YY ~  - Year of the appointment
}
