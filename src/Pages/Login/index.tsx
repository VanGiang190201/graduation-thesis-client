import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema_login } from '../../validation';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from '../../Components/Button';
import Wrapper from './Login.style';
import Image from '../../Components/Image';
import { logoImage } from '../../assets/images';
import { useAppDisPatch, useAppSelector } from '../../reudux/hook';
import { login } from '../../reudux/feature/authSlide';
import config from '../../config';
import Input from '../../Components/Input';
import { SpinnerIcon } from '../../Components/Icons';
import LoginSocial from '../../Components/LoginSocial';

interface ILoginProps {}

export interface IFormInputLogin {
    email: string;
    password: string;
}
const Login: React.FunctionComponent<ILoginProps> = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields, isSubmitted },
    } = useForm<IFormInputLogin>({
        mode: 'onTouched',
        resolver: yupResolver(schema_login),
    });
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const currentUser = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const dispatch = useAppDisPatch();
    const navigate = useNavigate();
    if (Object.keys(currentUser).length == 0) {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }

    const navigateToHome = () => {
        // setTimeout(() => {
        //     navigate(config.home);
        // }, 2000);
        // setTimeout(() => {
        //     toast.success('Login success', {
        //         position: 'top-right',
        //         autoClose: 600,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         draggable: true,
        //         progress: undefined,
        //     });
        // });
    };
    const handleSubmitForm = (data: IFormInputLogin) => {
        setIsLoading(true);
        dispatch(login({ ...data, onNavigate: navigateToHome }))
            .unwrap()
            .then((data: any) => {
                setIsLoading(false);
                if (Object.keys(data).length > 0) {
                    toast.success('Login success', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            });
    };

    return (
        <Wrapper>
            <div className="form-login">
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className="header-form">
                        <p className="title">Login</p>
                        <p className="description">Please login using account detail bellow.</p>
                    </div>

                    <Input
                        label="Email Address"
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
                        label="Password"
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

                    <p className="text-form">Forgot your password ?</p>
                    <Button className="sign-in-btn">
                        {isLoading ? <SpinnerIcon width="2rem" height="2rem" className="spinner-icon" /> : 'Sign In'}
                    </Button>
                </form>
                <div className="social-login">
                    <LoginSocial />
                </div>
                <div className="create-account text-form ">
                    Don’t have an account?{' '}
                    <Link to={config.register} className="register-link">
                        Create account
                    </Link>
                </div>
            </div>
            <div className="logo-image">
                <Image src={logoImage} alt="logo-image" className="image" />
            </div>
        </Wrapper>
    );
};

export default Login;
