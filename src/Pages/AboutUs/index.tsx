import * as React from 'react';

import Wrapper from './AboutUs.style';
import Image from '../../Components/Image';
import {
    aboutImage,
    cashBackImage,
    freeDeliveryImage,
    supportImage,
    premiumQualityImage,
    customerImages,
} from '../../assets/images';
import Button from '../../Components/Button';
import Features from '../../Components/Features';
import FeatureItem from '../../Components/Features/FeatureItem';

interface IAboutUsProps {}

const AboutUs: React.FunctionComponent<IAboutUsProps> = (props) => {
    return (
        <Wrapper>
            <div className="container">
                <div className="wrapper-header-content">
                    <div className="header-content">
                        <div className="slide">
                            <Image src={aboutImage} alt="about-image" className="about-image" />
                        </div>
                        <div className="information">
                            <p className="title">
                                Biết về lịch sử, hoạt động kinh doanh thương mại điện tử của chúng tôi
                            </p>
                            <p className="description">
                                “Đã đến lúc những nhà thiết kế nội thất cần được định vị vai trò một cách riêng biệt,
                                độc lập song song với nhiệm vụ thiết kế kiến trúc của một công trình hay dự án; cần có
                                một bộ quy chuẩn riêng dành cho thiết kế nội thất trong quy trình thiết kế xây dựng nói
                                chung”.
                            </p>
                            <Button className="contact-btn">Liên hệ chúng tôi</Button>
                        </div>
                    </div>
                </div>
                <div className="wrapper-feedback">
                    <div className="feed-back">
                        <p className="title-feedback">Khách hàng của chúng tôi!</p>
                        <div className="client-images">
                            <Image src={customerImages[0]} alt="first-image" className="first-image client-image" />
                            <Image src={customerImages[1]} alt="second-image" className="second-image client-image" />
                            <Image src={customerImages[2]} alt="third-image" className="third-image client-image" />
                        </div>
                        <div className="information-client">
                            <p className="name">Selina Gomez</p>
                            <p className="position">Ceo At Webecy Digital</p>
                        </div>
                        <div className="comment">
                            “Tôi sắp mở công ty nên cần hoàn thiện một số thứ trong nội thất văn phòng. Thế là mình chọn
                            nội thất NT vì tin tưởng những kiến trúc sư lành nghề và thấu hiểu khách hàng nơi đây. Quả
                            thật, họ không làm tôi thất vọng vì sản phẩm và chất lượng của mình. Các nhân viên công ty
                            tôi luôn cảm thấy làm việc thoải mái hơn trong không gian thật hiện đại nhưng không kém phần
                            tiện nghi này! Tôi rất hài lòng về những gì nội thất NT mang đến!”
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default AboutUs;
