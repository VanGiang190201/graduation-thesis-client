import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { uuidv4 } from '@firebase/util';

import { toast } from 'react-toastify';
import Button from '../../Components/Button';
import { SpinnerIcon } from '../../Components/Icons';
import Input from '../../Components/Input';
import config from '../../config';
import { registerUser } from '../../reudux/feature/authSlide';
import { useAppDisPatch } from '../../reudux/hook';
import { schema_register } from '../../validation';
import Wrapper from './Register.style';

interface IRegisterProps {}

export interface IFormInputRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
    const dispatch = useAppDisPatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields, isSubmitted },
    } = useForm<IFormInputRegister>({
        mode: 'onTouched',
        resolver: yupResolver(schema_register),
    });
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const handleSubmitForm = (data: IFormInputRegister) => {
        setIsLoading(true);
        const newData = {
            display_name: data.name,
            user_name: data.name,
            email: data.email,
            password: data.password,
        };
        dispatch(registerUser(newData))
            .unwrap()
            .then((data) => {
                setIsLoading(false);
                toast.success('Đăng ký thành công', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => navigate(config.login), 1000);
            });
    };
    return (
        <Wrapper>
            {' '}
            <div className="form-register">
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className="header-form">
                        <p className="title">Đăng ký</p>
                        <p className="description">Tạo một tài khoản để mua hàng</p>
                    </div>
                    <Input
                        label="Tên của bạn"
                        type="text"
                        placeholder="&nbsp;"
                        className="input"
                        register={register}
                        errors={errors}
                        rule="name"
                        labelBackground={true}
                        dirtyFields={dirtyFields.name}
                        isSubmitted={isSubmitted}
                    />
                    <Input
                        label="Email"
                        type="text"
                        placeholder="&nbsp;"
                        className="input"
                        register={register}
                        errors={errors}
                        rule="email"
                        labelBackground={true}
                        dirtyFields={dirtyFields.email}
                        isSubmitted={isSubmitted}
                    />

                    <Input
                        label="Mật khẩu"
                        type="password"
                        placeholder="&nbsp;"
                        className="input"
                        register={register}
                        errors={errors}
                        rule="password"
                        labelBackground={true}
                        dirtyFields={dirtyFields.password}
                        isSubmitted={isSubmitted}
                    />
                    <Input
                        label="Xác nhận mật khẩu"
                        type="password"
                        placeholder="&nbsp;"
                        className="input"
                        register={register}
                        errors={errors}
                        rule="confirmPassword"
                        labelBackground={true}
                        dirtyFields={dirtyFields.confirmPassword}
                        isSubmitted={isSubmitted}
                    />

                    <Button className="register-btn">
                        {isLoading ? <SpinnerIcon width="2rem" height="2rem" className="spinner-icon" /> : 'Đăng ký'}
                    </Button>
                    <div className="login text-form ">
                        Bạn đã có tài khoản?{' '}
                        <Link to={config.login} className="login-link">
                            Đăng nhập
                        </Link>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

export default Register;
