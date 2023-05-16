import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema_forgot, schema_verify } from '../../validation';
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

interface IFormVerifyProps {
    setStep?: any;
    mail: string;
}

export interface IFormInputVerify {
    code: number;
}
const FormVerify: React.FunctionComponent<IFormVerifyProps> = ({ setStep, mail }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields, isSubmitted },
    } = useForm<IFormInputVerify>({
        mode: 'onTouched',
        resolver: yupResolver(schema_verify),
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

    const handleSubmitForm = (data: IFormInputVerify) => {
        setIsLoading(true);
        authenApi
            .sendCodeVerify({ email: mail, codeVerify: data.code })
            .then((res: any) => {
                console.log(res);
                setIsLoading(false);
                if (res.verify) {
                    setStep(3);
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
                    <p className="title">Xác minh</p>
                    <p className="description">Mã xác minh đã được gửi về mail. Vui lòng kiểm tra</p>
                </div>

                <Input
                    label="Mã xác minh"
                    type="text"
                    placeholder="&nbsp;"
                    className="input"
                    register={register}
                    errors={errors}
                    rule="code"
                    labelBackground={true}
                    dirtyFields={dirtyFields.code}
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

export default FormVerify;
