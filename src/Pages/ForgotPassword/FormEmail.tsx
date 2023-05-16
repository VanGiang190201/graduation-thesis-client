import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema_forgot } from '../../validation';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from '../../Components/Button';
import Image from '../../Components/Image';
import { logoImage } from '../../assets/images';
import { useAppDisPatch, useAppSelector } from '../../reudux/hook';
import { login } from '../../reudux/feature/authSlide';
import config from '../../config';
import Input from '../../Components/Input';
import { SpinnerIcon } from '../../Components/Icons';
import LoginSocial from '../../Components/LoginSocial';
import styled from 'styled-components';
import { authenApi } from '../../api/authApi';

interface IFormEmailProps {
    setStep?: any;
    setMail?: any;
}

export interface IFormInputEmail {
    email: string;
}
const FormEmail: React.FunctionComponent<IFormEmailProps> = ({ setStep, setMail }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields, isSubmitted },
    } = useForm<IFormInputEmail>({
        mode: 'onTouched',
        resolver: yupResolver(schema_forgot),
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
    const handleSubmitForm = (data: IFormInputEmail) => {
        setIsLoading(true);
        authenApi
            .sendMail(data)
            .then((res: any) => {
                console.log(res);
                setIsLoading(false);
                if (res.code === 200) {
                    setStep(2);
                    setMail(data.email);
                }
            })
            .catch((errors) =>
                toast.error(errors.message, {
                    position: 'top-right',
                    autoClose: 600,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                }),
            );
    };

    return (
        <Style.Wrapper>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div className="header-form">
                    <p className="title">Quên mật khẩu</p>
                    <p className="description">Vui lòng nhập email của bạn</p>
                </div>

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

                <Button className="confirm-btn">
                    {isLoading ? <SpinnerIcon width="2rem" height="2rem" className="spinner-icon" /> : 'Xác nhận'}
                </Button>
            </form>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div`
        width: 100%;
        .form {
            width: 54rem;
            box-shadow: 0px 0px 25px 10px #f8f8fb;
            margin: auto;
            margin-top: 10rem;
            margin-bottom: 10rem;
            padding: 5rem;
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        .header-form {
            margin-bottom: 3.6rem;
            text-align: center;
        }

        .title {
            font-size: 3.2rem;
            line-height: 3.6rem;
            color: #000;
            margin-bottom: 0.7rem;
            font-weight: 700;
        }

        .description {
            font-size: 1.6rem;
            line-height: 2rem;
            font-weight: 500;
            font-family: 'Roboto Slab';
            color: #9096b2;
        }

        .input {
            width: 43rem;
            height: 5rem;
            border: 1px solid #c2c5e1;
            border-radius: 0.2rem;
            outline: none;
            padding: 0.5rem 0.8rem;
            font-size: 1.4rem;
        }
        .test-input {
            height: 4rem;
            width: 26rem;
            padding: 0 0.6rem;
            border: 1px solid #c2c5e1;
        }

        .text-form {
            font-size: 1.6rem;
            line-height: 2rem;
            font-weight: 500;
            font-family: 'Roboto Slab';
            color: #9096b2;
            margin-bottom: 1.2rem;
        }
        .error {
            color: var(--red-color);
            font-size: 1.2rem;
            margin: 0.8rem 0 1rem 0;
            font-weight: 600;
        }
        .logo-image {
            width: 90rem;
            margin: auto;
            margin-bottom: 10rem;
        }

        .confirm-btn {
            height: 4.7rem;
            background-color: var(--primary-background-color-btn);
            border: none;
            font-size: 1.6rem;
            font-weight: 600;
            line-height: 2rem;
            color: #fff;
            margin-bottom: 2.8rem;
        }
    `,
};

export default FormEmail;
