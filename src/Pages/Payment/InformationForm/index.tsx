import * as React from 'react';

import Wrapper from './InformationForm.style';
import Input from '../../../Components/Input';
interface IInformationFormProps {
    register: any;
    errors: any;
}

const InformationForm: React.FunctionComponent<IInformationFormProps> = (props) => {
    const { register, errors } = props;
    return (
        <Wrapper>
            <form>
                <div className="contact-information">
                    <label className="title">Contact Information</label>
                    <Input
                        type="text"
                        className="phone"
                        label="Email or mobile phone number"
                        placeholder="&nbsp;"
                        register={register}
                        rule="phone"
                        errors={errors}
                        paymentPage
                    />
                </div>
                <div className="shipped-address">
                    <label className="title">Shipping address</label>
                    <div className="name">
                        <div className="wrapper-first-name">
                            <Input
                                type="text"
                                className="first-name"
                                register={register}
                                placeholder="&nbsp;"
                                rule="firstName"
                                label="First name"
                                errors={errors}
                                paymentPage
                            />
                        </div>
                        <div className="wrapper-last-name">
                            <Input
                                type="text"
                                className="last-name"
                                register={register}
                                placeholder="&nbsp;"
                                rule="lastName"
                                label="First name"
                                errors={errors}
                                paymentPage
                            />
                        </div>
                    </div>

                    <Input
                        type="text"
                        className="address"
                        label="Address"
                        placeholder="&nbsp;"
                        register={register}
                        rule="address"
                        errors={errors}
                        paymentPage
                    />

                    <Input
                        type="text"
                        className="apartment"
                        register={register}
                        errors={errors}
                        placeholder="&nbsp;"
                        rule="apartment"
                        label="Apartment"
                        paymentPage
                    />

                    <Input
                        type="text"
                        className="city"
                        register={register}
                        errors={errors}
                        rule="city"
                        placeholder="&nbsp;"
                        label="City"
                        paymentPage
                    />

                    {/* <Input
                        type="text"
                        className="postal-code"
                        register={register}
                        rule="postalCode"
                        errors={errors}
                        label="Postal Code"
                        placeholder="&nbsp;"
                        paymentPage
                    /> */}
                </div>
            </form>
        </Wrapper>
    );
};

export default InformationForm;
