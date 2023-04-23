import * as yup from 'yup';

const passRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z_.\-@]{8,}$/;
const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegExp = /[0-9]/;
export const schema_login = yup.object({
    email: yup.string().required('Email is a required field').matches(emailRegExp, 'Email invalid'),
    password: yup.string().required('Password is a required field'),
});

export const schema_register = yup.object({
    name: yup.string().required('Name is a required field'),
    email: yup.string().required('Email is a required field').matches(emailRegExp, 'Email invalid'),
    password: yup
        .string()
        .required('Password is a required field')
        .matches(passRegExp, 'Password must has 8 characters include number and string'),
    confirmPassword: yup
        .string()
        .required('Confirm password is a required field')
        .oneOf([yup.ref('password')], 'Password not match!'),
});

export const schema_payment = yup.object({
    phone: yup.string().required('Phone number is a required field').matches(phoneRegExp, 'phone number invalid'),
    firstName: yup.string().required('First name is a required field'),
    lastName: yup.string().required('Last name is a required field'),
    address: yup.string().required('Address is a required field'),
    apartment: yup.string().required('Apartment is a required field'),
    city: yup.string().required('City is a required field'),
});
