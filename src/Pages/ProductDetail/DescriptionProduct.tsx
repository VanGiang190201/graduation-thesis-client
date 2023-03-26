import * as React from 'react';

import { Text } from '../../Components/Text';
import { DescriptionProductWrapper } from './ProductDetail.style';
interface IDescriptionProductProps {}

const DescriptionProduct: React.FunctionComponent<IDescriptionProductProps> = (props) => {
    return (
        <DescriptionProductWrapper>
            <div className="wrapper">
                <div className="tabs">
                    <p className="tab-item">Description</p>
                    <p className="tab-item">Additional Info</p>
                    <p className="tab-item">Reviews</p>
                    <p className="tab-item">Video</p>
                </div>
                <div className="panel">
                    <div className="panel-item">
                        <Text textOfLine={1} className="title">
                            Varius tempor.
                        </Text>
                        <Text textOfLine={5} className="description">
                            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et
                            eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac
                            ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat
                            laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet
                            consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
                            nec. Dui, massa viverr .
                        </Text>
                        <Text textOfLine={1} className="title">
                            More details
                        </Text>
                        <div className="more-details">
                            <Text textOfLine={2} className="description">
                                <span>➡</span> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu,
                                nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                            </Text>
                            <Text textOfLine={2} className="description">
                                <span>➡</span> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu,
                                nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                            </Text>
                            <Text textOfLine={2} className="description">
                                <span>➡</span> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu,
                                nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </DescriptionProductWrapper>
    );
};

export default DescriptionProduct;
