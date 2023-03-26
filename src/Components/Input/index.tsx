import React, { ChangeEventHandler, forwardRef, useEffect } from 'react';
import styled from 'styled-components';

interface IInputProps {
    type: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
    id?: string;
    className?: string;
    name?: string;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    placeholder?: string;
    label?: string;
    register?: any;
    errors?: any;
    rule?: any;
    labelBackground?: boolean;
    dirtyFields?: boolean;
    isSubmitted?: boolean;
    paymentPage?: boolean;
}

const WrapperInput = styled.div`
    width: 100%;
    .place-holder {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0.4rem;
        padding: 0.2rem 0.4rem;
        font-size: 1.4rem;
        font-weight: 600;
        color: #888;
        transition: 0.1s ease;
        pointer-events: none;
    }
    .label-error {
        top: 50%;
        transform: translateY(-50%);
        background-color: transparent;
    }
    .background-while {
        background-color: #fff;
    }

    .input-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
    }
    input:focus + .place-holder {
        top: -0.1rem;
        left: 1rem;
        font-size: 1.3rem;
        color: #222;
        border-left: 1px solid #c2c5e1;
    }

    input:not(:placeholder-shown) + .place-holder {
        top: -0.1rem;
        left: 1rem;
        font-size: 1.3rem;
        opacity: 1;
        border-left: 1px solid #c2c5e1;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }
    input[data-autocompleted] {
        background-color: transparent !important;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        width: unset;
    }
`;

const Input: React.FC<IInputProps> = forwardRef(
    (
        {
            type,
            id,
            onChange,
            value,
            className,
            name,
            onFocus,
            onBlur,
            placeholder,
            label,
            register,
            errors,
            rule,
            labelBackground,
            dirtyFields,
            isSubmitted,
            paymentPage,
        },
        ref: React.LegacyRef<HTMLInputElement>,
    ) => {
        return (
            <WrapperInput>
                <div className="input-wrapper">
                    {register ? (
                        <input
                            type={type}
                            id={id}
                            spellCheck={false}
                            onChange={onChange}
                            value={value}
                            className={className}
                            name={name}
                            ref={ref}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            {...register(rule)}
                        />
                    ) : (
                        <input
                            type={type}
                            id={id}
                            spellCheck={false}
                            onChange={onChange}
                            value={value}
                            className={className}
                            name={name}
                            ref={ref}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            placeholder={placeholder}
                        />
                    )}
                    {label && (
                        <label
                            className={`place-holder ${labelBackground ? 'background-while' : ''} ${
                                errors !== undefined || Object.keys(errors).length > 0 ? 'label-error' : ''
                            }`}
                        >
                            {label}
                        </label>
                    )}
                </div>
                {errors !== undefined &&
                    (paymentPage ? (
                        <p className="error">
                            {' '}
                            <label>{errors[rule]?.message}</label>
                        </p>
                    ) : (
                        <p className="error">
                            {((dirtyFields && errors[rule]?.message) || isSubmitted) && (
                                <label>{errors[rule]?.message}</label>
                            )}
                        </p>
                    ))}
            </WrapperInput>
        );
    },
);

export default Input;
