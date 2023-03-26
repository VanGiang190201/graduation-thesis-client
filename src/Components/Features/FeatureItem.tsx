import * as React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FeatureItemWrapper } from './Features.style';
import Image from '../Image';
import { Text } from '../Text';
interface IFeatureItemProps {
    srcImage: string;
    titleFeature?: string;
    descriptionFeature?: string;
}

const FeatureItem: React.FunctionComponent<IFeatureItemProps> = (props) => {
    const { srcImage, titleFeature, descriptionFeature } = props;
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        AOS.refresh();
    }, []);
    return (
        <FeatureItemWrapper data-aos="fade-up">
            <div className="image-feature">
                <Image src={srcImage} alt="image-feature" className="image" />
            </div>
            <Text textOfLine={2} className="title-feature">
                {titleFeature}
            </Text>
            <Text textOfLine={4} className="description-feature">
                {descriptionFeature}
            </Text>
        </FeatureItemWrapper>
    );
};

export default FeatureItem;
