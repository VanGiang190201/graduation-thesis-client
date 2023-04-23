import * as React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FeatureItemWrapper } from './Features.style';
import Image from '../Image';
import { Text } from '../Text';
import { FeaturesDataProps } from '../../Utils/interface';
interface IFeatureItemProps {
    data: FeaturesDataProps;
}

const FeatureItem: React.FunctionComponent<IFeatureItemProps> = (props) => {
    const { data } = props;

    React.useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        AOS.refresh();
    }, []);
    return (
        <FeatureItemWrapper data-aos="fade-up">
            <div className="image-feature">
                <Image src={data.image_feature} alt="image-feature" className="image" />
            </div>
            <Text textOfLine={2} className="title-feature">
                {data.name_feature}
            </Text>
            <Text textOfLine={4} className="description-feature">
                {data.description_feature}
            </Text>
        </FeatureItemWrapper>
    );
};

export default FeatureItem;
