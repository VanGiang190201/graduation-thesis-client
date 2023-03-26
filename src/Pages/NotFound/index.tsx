import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Wrapper from './NotFound.style';
import Image from '../../Components/Image';
import { errorImage, logoImage } from '../../assets/images';
import Button from '../../Components/Button';

interface INotFoundProps {}

const NotFound: React.FunctionComponent<INotFoundProps> = (props) => {
    const navigate = useNavigate();
    const handleBackHome = () => {
        navigate('/');
    };
    return (
        <Wrapper>
            <div className="inner">
                <div className="error-view">
                    <Image src={errorImage} alt="error-image" className="error-image" />
                </div>
                <div className="back-home">
                    <Button className="back-home-btn" onClick={handleBackHome}>
                        Back To Home
                    </Button>
                </div>
                <div className="logo-image">
                    <Image src={logoImage} alt="logo-image" className="image" />
                </div>
            </div>
        </Wrapper>
    );
};

export default NotFound;
