import axios from 'axios';

// eslint-disable-next-line
export const handleErrorMessages = (error: any) => {
    let message;
    if (error.message && error.code === 'ERR_NETWORK') {
        return {
            error: error.message,
        };
    }
    if (axios.isAxiosError(error)) {
        if (error.response && error.response.data) {
            message = error.response.data;
        }
        return message;
    } else {
        if (error.message) {
            message = error;
        } else {
            message = error;
        }
    }

    return message;
};
