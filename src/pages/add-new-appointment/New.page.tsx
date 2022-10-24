import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import moment, { Moment } from 'moment';
import { Button, Input, Select, DatePicker, TimePicker } from 'antd';
import { useDispatch, useSelector } from '../../hooks';
import { createAppointmentFunc } from '../../features/appointment/thunk/appointmentThunkAPI';

const { Option } = Select;
const { TextArea } = Input;

// stylesheet
import styles from './new.module.css';

// components
import NavbarComponent from '../../components/navbar/Navbar.component';

import { CONSTANTS } from '../../constants/Constants';
import { AppointmentEntityType } from '../../types/models';
import { RootState } from '../../app/store';
import LoadingOverlayComponent from '../../components/loading-overlay/LoadingOverlay.component';

const NewAppointment: React.FC = () => {
    const [formData, setFormData] = useState<AppointmentEntityType>({
        uniqueCode: '',
        clientName: '',
        phone: '',
        email: '',
        address1: '',
        city: '',
        firstTime: 'Yes',
        appointmentDate: '',
        requestDate: '',
        appointmentStatus: 'Pending',
        appointmentTime: '',
        noteAfterAppointment: '',
        noteBeforeAppointment: '',
        sex: 'Male',
    });

    const { uniqueCode, clientName, phone, email, address1, city, noteBeforeAppointment, noteAfterAppointment } =
        formData;

    // eslint-disable-next-line
    const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const dispatch = useDispatch();

    const appointmentState = useSelector((state: RootState) => state.appointmentSlice);
    const { isError, isLoading, isSuccess, message } = appointmentState;

    // eslint-disable-next-line
    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(formData);

        dispatch(createAppointmentFunc(formData));
    };

    useEffect(() => {
        if (isError) {
            alert(message);
        }
        if (isSuccess) {
            alert('Appointment successfully created!');
        }
    }, [isError, isLoading, isSuccess, message]);

    return (
        <div className={styles.add__new}>
            <NavbarComponent />

            {isLoading && <LoadingOverlayComponent />}

            <section className={styles.section}>
                <div className={styles.head}>
                    <Link to={CONSTANTS.PATHS.landing}>
                        <AiOutlineArrowLeft size={20} color="var(--gray-color)" />
                    </Link>
                    <h2 style={{ marginTop: '0.7rem' }}>New Record</h2>
                </div>
            </section>

            <form className={styles.form}>
                <div className={styles.headline}>
                    <h2>General Information</h2>
                </div>

                <div className={styles.getters}>
                    <div className={styles.form__control}>
                        <h3>Unique Code</h3>
                        <Input
                            name="uniqueCode"
                            onChange={onChange}
                            value={uniqueCode}
                            size="large"
                            placeholder="unique code"
                        />
                    </div>
                    <div className={styles.form__control}>
                        <h3>Name</h3>
                        <Input
                            name="clientName"
                            onChange={onChange}
                            value={clientName}
                            size="large"
                            placeholder="name"
                        />
                    </div>
                    <div className={styles.form__control}>
                        <h3>Sex</h3>
                        <Select
                            onChange={(value: string) => setFormData({ ...formData, sex: value })}
                            defaultValue="Male"
                            size="large"
                        >
                            <Option value="Male">Male</Option>
                            <Option value="Female">Female</Option>
                        </Select>
                    </div>
                    <div className={styles.form__control}>
                        <h3>Phone</h3>
                        <Input name="phone" onChange={onChange} value={phone} size="large" placeholder="phone" />
                    </div>

                    <div className={styles.form__control}>
                        <h3>Email</h3>
                        <Input name="email" onChange={onChange} value={email} size="large" placeholder="email" />
                    </div>
                </div>

                <div className={styles.rule}></div>

                <div className={styles.headline}>
                    <h2>Appointment Information</h2>
                </div>

                <div className={styles.getters}>
                    <div className={styles.form__control}>
                        <h3>Appointment Date</h3>
                        <DatePicker
                            size="large"
                            onChange={(date, dateString) => setFormData({ ...formData, appointmentDate: dateString })}
                        />
                    </div>
                    <div className={styles.form__control}>
                        <h3>First Time</h3>
                        <Select
                            defaultValue="Yes"
                            size="large"
                            onChange={(value: string) => setFormData({ ...formData, firstTime: value })}
                        >
                            <Option value="Yes">Yes</Option>
                            <Option value="No">No</Option>
                        </Select>
                    </div>
                    <div className={styles.form__control}>
                        <h3>Request Date</h3>
                        <DatePicker
                            size="large"
                            onChange={(date, dateString) => setFormData({ ...formData, requestDate: dateString })}
                        />
                    </div>
                    <div className={styles.form__control}>
                        <h3>Appointment Status</h3>
                        <Select
                            onChange={(value: string) => setFormData({ ...formData, appointmentStatus: value })}
                            defaultValue="Pending"
                            size="large"
                        >
                            <Option value="Pending">Pending</Option>
                            <Option value="Completed">Completed</Option>
                            <Option value="Rescheduled">Rescheduled</Option>
                        </Select>
                    </div>
                    <div className={styles.form__control}>
                        <h3>Appointment Time</h3>
                        <TimePicker
                            onChange={(time: Moment | null, timeString: string) => {
                                console.log(timeString);
                                setFormData({ ...formData, appointmentTime: timeString });
                            }}
                            defaultValue={moment('12:08:00', 'HH:mm:ss')}
                            size="large"
                        />
                    </div>
                </div>

                <div className={styles.headline}>
                    <h2>Address Information</h2>
                </div>

                <div className={styles.getters}>
                    <div className={styles.form__control}>
                        <h3>Address 1</h3>
                        <Input
                            name="address1"
                            onChange={onChange}
                            value={address1}
                            size="large"
                            placeholder="address 1"
                        />
                    </div>
                    <div className={styles.form__control}>
                        <h3>City</h3>
                        <Input name="city" onChange={onChange} value={city} size="large" placeholder="city" />
                    </div>
                </div>

                <div className={styles.headline}>
                    <h2>Notes </h2>
                </div>

                <div className={`${styles.getters} ${styles.controllable}`}>
                    <div style={{ flex: 1 }} className={styles.form__control}>
                        <h3>Before Appointment</h3>
                        <TextArea
                            name="noteBeforeAppointment"
                            value={noteBeforeAppointment}
                            onChange={onChange}
                            style={{ resize: 'none', width: '100%' }}
                            rows={4}
                            placeholder="Before Appointment"
                        />
                    </div>
                    <div style={{ flex: 1 }} className={styles.form__control}>
                        <h3>After Appointment</h3>
                        <TextArea
                            name="noteAfterAppointment"
                            value={noteAfterAppointment}
                            onChange={onChange}
                            style={{ resize: 'none', width: '100%' }}
                            rows={4}
                            placeholder="After Appointment"
                        />
                    </div>
                </div>
            </form>

            <div className={styles.add}>
                <Link to={CONSTANTS.PATHS.add_new_appointment}>
                    <Button
                        onClick={handleSubmit}
                        title="New Appointment"
                        style={{
                            padding: '2rem',
                            fontSize: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'orangered',
                            border: 'none',
                        }}
                        type="primary"
                    >
                        Save
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NewAppointment;
