import * as yup from 'yup';

const passRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z_.\-@]{8,}$/;
const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegExp = /[0-9]/;
const verifyReq = /^[0-9]{6}$/;
export const schema_login = yup.object({
    email: yup.string().required('Vui lòng nhập email').matches(emailRegExp, 'Nhập sai định dạng'),
    password: yup.string().required('Vui lòng nhập mật khẩu'),
});

export const schema_register = yup.object({
    name: yup.string().required('Vui lòng nhập trường tên'),
    email: yup.string().required('Vuo lòng nhập email').matches(emailRegExp, 'Nhập sai định dạng'),
    password: yup
        .string()
        .required('Vui lòng nhập mật khẩu')
        .matches(passRegExp, 'Mật khẩu gồm 8 kí tự gồm kí tự và chữ số'),
    confirmPassword: yup
        .string()
        .required('Vui lòng nhập xác nhận mật khẩu')
        .oneOf([yup.ref('password')], 'Mật khẩu không trùng'),
});

export const schema_payment = yup.object({
    phone: yup.string().required('Vui lòng nhập số điện thoại').matches(phoneRegExp, 'Sai định dạng số điện thoại'),
    firstName: yup.string().required('Vui lòng nhập họ'),
    lastName: yup.string().required('Vui lòng nhập tên'),
    address: yup.string().required('Vui lòng nhập địa chỉ'),
    apartment: yup.string().required('Vui lòng nhập tòa nhà'),
    city: yup.string().required('Vui lòng nhập thành phố'),
});

export const schema_forgot = yup.object({
    email: yup.string().required('Vui lòng nhập email').matches(emailRegExp, 'Nhập sai định dạng'),
});

export const schema_verify = yup.object({
    code: yup.string().required('Vui lòng nhập mã xác minh').matches(verifyReq, 'Nhập sai định dạng'),
});

export const schema_newPassword = yup.object({
    password: yup
        .string()
        .required('Vui lòng nhập mật khẩu')
        .matches(passRegExp, 'Mật khẩu gồm 8 kí tự gồm kí tự và chữ số'),
    confirmPassword: yup
        .string()
        .required('Vui lòng nhập xác nhận mật khẩu')
        .oneOf([yup.ref('password')], 'Mật khẩu không trùng'),
});
