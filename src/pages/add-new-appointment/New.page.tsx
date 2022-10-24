import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import moment from 'moment';
import { Button, Input, Select, DatePicker, DatePickerProps, TimePicker } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

// stylesheet
import styles from './new.module.css';

// components
import NavbarComponent from '../../components/navbar/Navbar.component';
import { CONSTANTS } from '../../constants/Constants';

const NewAppointment: React.FC = () => {
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div className={styles.add__new}>
            <NavbarComponent />

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
                        <Input size="large" placeholder="unique code" />
                    </div>
                    <div className={styles.form__control}>
                        <h3>Name</h3>
                        <Input size="large" placeholder="name" />
                    </div>
                    <div className={styles.form__control}>
                        <h3>Sex</h3>
                        <Select defaultValue="Male" size="large">
                            <Option value="Male">Male</Option>
                            <Option value="Female">Female</Option>
                        </Select>
                    </div>
                    <div className={styles.form__control}>
                        <h3>Phone</h3>
                        <Input size="large" placeholder="phone" />
                    </div>

                    <div className={styles.form__control}>
                        <h3>Email</h3>
                        <Input size="large" placeholder="email" />
                    </div>
                </div>

                <div className={styles.rule}></div>

                <div className={styles.headline}>
                    <h2>Appointment Information</h2>
                </div>

                <div className={styles.getters}>
                    <div className={styles.form__control}>
                        <h3>Appointment Date</h3>
                        <DatePicker size="large" onChange={onChange} />
                    </div>
                    <div className={styles.form__control}>
                        <h3>First Time</h3>
                        <Select defaultValue="YES" size="large">
                            <Option value="YES">YES</Option>
                            <Option value="NO">NO</Option>
                        </Select>
                    </div>
                    <div className={styles.form__control}>
                        <h3>Request Date</h3>
                        <DatePicker size="large" onChange={onChange} />
                    </div>
                    <div className={styles.form__control}>
                        <h3>Appointment Status</h3>
                        <Select defaultValue="Pending" size="large">
                            <Option value="Pending">Pending</Option>
                            <Option value="Completed">Completed</Option>
                            <Option value="Rescheduled">Rescheduled</Option>
                        </Select>
                    </div>
                    <div className={styles.form__control}>
                        <h3>Appointment Time</h3>
                        <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
                    </div>
                </div>

                <div className={styles.headline}>
                    <h2>Address Information</h2>
                </div>

                <div className={styles.getters}>
                    <div className={styles.form__control}>
                        <h3>Address 1</h3>
                        <Input size="large" placeholder="address 1" />
                    </div>
                    <div className={styles.form__control}>
                        <h3>City</h3>
                        <Input size="large" placeholder="city" />
                    </div>
                </div>

                <div className={styles.headline}>
                    <h2>Notes </h2>
                </div>

                <div className={styles.getters}>
                    <div className={styles.form__control}>
                        <h3>Before Appointment</h3>
                        <TextArea style={{ resize: 'none' }} rows={4} placeholder="Before Appointment" />
                    </div>
                    <div className={styles.form__control}>
                        <h3>After Appointment</h3>
                        <TextArea style={{ resize: 'none' }} rows={4} placeholder="After Appointment" />
                    </div>
                </div>
            </form>

            <div className={styles.add}>
                <Link to={CONSTANTS.PATHS.add_new_appointment}>
                    <Button
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
