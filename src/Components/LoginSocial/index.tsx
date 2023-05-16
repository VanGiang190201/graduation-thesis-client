import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

import Wrapper from './LoginSocial.style';
import config from '../../config';
import { UserIcon, FacebookIcon, GoogleIcon } from '../Icons';
import Button from '../Button';
import { Text } from '../Text';
import initializeAuthentication from '../../firebase/firebase.config';
import { authSlide } from '../../reudux/feature/authSlide';
import { useAppDisPatch } from '../../reudux/hook';
import { registerUser } from '../../reudux/feature/authSlide';
import { getListUser } from '../../api/userApi';
import { IUser } from '../../Utils/interface';

//InitAuthentication
initializeAuthentication();
interface ILoginSocialProps {}

const LoginSocial: React.FunctionComponent<ILoginSocialProps> = (props) => {
    const navigate = useNavigate();
    const dispatch = useAppDisPatch();

    const handleRouteRegister = () => {};

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
        googleProvider.setCustomParameters({
            prompt: 'select_account',
        });
        signInWithPopup(auth, googleProvider)
            .then((res: any) => {
                let user = {
                    accessToken: res.user.accessToken,
                    displayName: res.user.displayName,
                    email: res.user.email,
                    avatar: res.user.photoURL,
                    id: res.user.uid,
                };
                dispatch(authSlide.actions.logInWithFireBase(user));
                dispatch(registerUser(user));
            })
            .catch((error) => console.error(error));
    };

    const handleFacebookSignIn = () => {
        const auth = getAuth();
        const facebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth, facebookProvider)
            .then((res: any) => {
                let user = {
                    accessToken: res.user.accessToken,
                    displayName: res.user.displayName,
                    email: res.user.email,
                    avatar: res.user.photoURL,
                    id: res.user.uid,
                };
                dispatch(authSlide.actions.logInWithFireBase(user));
                dispatch(registerUser(user));
            })
            .catch((error) => console.log(error));
    };
    return (
        <Wrapper>
            <div className="center-modal">
                <Button className="signin-btn-wrapper" onClick={handleGoogleSignIn}>
                    <div className="icon-wrapper">
                        <GoogleIcon width="2rem" height="2rem" className="google-icon-modal" />
                    </div>
                    Đăng nhập với Google
                </Button>
            </div>
        </Wrapper>
    );
};

export default LoginSocial;
