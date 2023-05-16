import { Image, message } from 'antd';
import styled from 'styled-components';
import { Input } from 'antd';
import { useForm } from 'react-hook-form';
import * as profileRequest from '../../api/profileApi';
import { useEffect, useState } from 'react';
import { ProfileDataProps } from '../../Utils/interface';
import Button from '../../Components/Button';
import { toast } from 'react-toastify';
import { SpinnerIcon } from '../../Components/Icons';

interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = () => {
    const { register, handleSubmit } = useForm<any>({
        mode: 'onTouched',
    });
    const [profile, setProfile] = useState<ProfileDataProps>();
    const [avatar, setAvatar] = useState<any>();
    const [preview, setPreview] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [isChange, setIsChange] = useState<boolean>(false);

    useEffect(() => {
        profileRequest.getProfile().then((res) => setProfile(res.data));
    }, [isChange]);

    const handleUploadFile = (e: any) => {
        setAvatar(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    };
    const handleSubmitForm = (data: any) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('user_name', data.user_name ? data.user_name : profile?.user_name);
        formData.append('display_name', data.display_name ? data.display_name : profile?.display_name);
        formData.append('phone', data.phone ? data.phone : profile?.phone);
        formData.append('address', data.address ? data.address : profile?.address);
        formData.append('first_name', data.first_name ? data.first_name : profile?.first_name);
        formData.append('birthday', data.birthday ? data.birthday : profile?.birthday);
        formData.append('last_name', data.last_name ? data.last_name : profile?.last_name);
        formData.append('avatar', avatar);

        profileRequest.updateProfile(formData).then((res) => {
            setLoading(false);
            setIsChange(!isChange);
            toast.success(res.message, {
                position: 'top-right',
                autoClose: 600,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        });
    };
    return (
        <Style.Wrapper>
            <Style.CardProfile>
                <Style.UploadAvatar>
                    <Style.Avatar>
                        <Image src={preview ? preview : profile?.avatar} alt="" className="image-profile" />
                    </Style.Avatar>
                    <input type="file" className="upload-file" onChange={(e) => handleUploadFile(e)} />
                </Style.UploadAvatar>
                <Style.Information>
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <div>
                            <label className="title">Tên của bạn</label>
                            <input type="text" defaultValue={profile?.user_name} {...register('user_name')} />
                        </div>
                        <div>
                            <label className="title">Tên hiển thị</label>
                            <input type="text" defaultValue={profile?.display_name} {...register('display_name')} />
                        </div>
                        <div className="detail">
                            <div className="wrapper-first-name">
                                <label className="title">Họ</label>
                                <input type="text" defaultValue={profile?.first_name} {...register('first_name')} />
                            </div>
                            <div className="wrapper-last-name">
                                <label className="title">Tên</label>
                                <input type="text" defaultValue={profile?.last_name} {...register('last_name')} />
                            </div>
                            <div>
                                <label className="title">Ngày sinh</label>
                                <input type="text" defaultValue={profile?.birthday} {...register('birthday')} />
                            </div>
                        </div>

                        <div>
                            <label className="title">Số điện thoại</label>
                            <input type="text" defaultValue={profile?.phone} {...register('phone')} />
                        </div>

                        <div>
                            <label className="title">Địa chỉ</label>
                            <input type="text" defaultValue={profile?.address} {...register('address')} />
                        </div>

                        <Button className="change">
                            {loading ? <SpinnerIcon width="2rem" height="2rem" className="spinner-icon" /> : 'Cập nhật'}
                        </Button>
                    </form>
                </Style.Information>
            </Style.CardProfile>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div`
        width: 114rem;
        margin: auto;
        padding: 2rem 1rem;
    `,

    CardProfile: styled.div`
        width: 60rem;
        background-color: #ccc;
        margin: auto;
        border-radius: 2rem;
        margin-top: 8rem;
        padding: 8px 16px;
    `,
    UploadAvatar: styled.div`
        height: 13rem;
        width: 100%;
        position: relative;
        .upload-file {
            position: absolute;
            left: 50%;
            top: 76px;
            transform: translateX(-50%);
            width: 20rem;
        }
    `,

    Avatar: styled.div`
        width: 14rem;
        height: 14rem;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        left: 50%;
        top: -60px;
        transform: translateX(-50%);
        .ant-image {
            width: 14rem;
            height: 14rem;
        }
        .image-profile {
            height: 100%;
        }
    `,
    Information: styled.div`
        input {
            border: none;
            border-bottom: 2px solid #bfc6e0;
            padding: 1.2rem 1rem;
            height: 4.6rem;
            background-color: #f8f8fd;
            font-size: 1.4rem;
            font-family: 'Roboto Slab';
            line-height: 1.7rem;
            letter-spacing: 0.02em;
            margin-bottom: 1rem;
            text-align: center;
            width: 100%;
            border-radius: 4px;
        }
        .title {
            margin-bottom: 8px;
            display: block;
        }
        .detail {
            display: flex;
            gap: 4px;
        }
        .change {
            width: 24rem;
            height: 4rem;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            margin-left: 16rem;
        }
        .spinner-icon {
            animation: spinner 2s linear infinite;
        }
        @keyframes spinner {
            0% {
                transform: rotateZ(0deg);
            }
            100% {
                transform: rotateZ(360deg);
            }
        }
    `,
};
export default Profile;
