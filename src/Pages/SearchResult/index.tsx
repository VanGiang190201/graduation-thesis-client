import * as React from 'react';
import { useParams } from 'react-router-dom';

import { logoImage, noResultImage } from '../../assets/images';
import Image from '../../Components/Image';
import ResultItem from './ResultItem';
import Wrapper from './SearchResult.style';
import { IProduct } from '../../Utils/interface';
import * as productRequest from '../../api/productApi';
import Loading from '../../Components/Loading';
interface ISearchResultProps {}

const SearchResult: React.FunctionComponent<ISearchResultProps> = (props) => {
    const [listResultSearch, setListResultSearch] = React.useState<IProduct[]>([]);
    // const [listResultByType, setListResultByType] = React.useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const keyword: string | undefined = useParams().keySearch;

    React.useEffect(() => {
        productRequest.searchProduct(keyword).then((res) => {
            setIsLoading(false);
            setListResultSearch(res);
        });
    }, [keyword]);
    // React.useEffect(() => {
    //     setIsLoading(false);
    //     productRequest.getListProductByType(keyword).then((res) => {
    //         setIsLoading(false);
    //         setListResultByType(res);
    //     });
    // }, [keyword]);
    return isLoading ? (
        <Loading />
    ) : (
        <Wrapper>
            {listResultSearch?.length > 0 /* || listResultByType?.length > 0  */ ? (
                <div className="list-result">
                    {listResultSearch.map((item: IProduct) => (
                        <ResultItem key={item.id} id={item.id} />
                    ))}
                    {/* <div className="list-result">
                        {listResultByType.map((item: IProduct) => (
                            <ResultItem key={item.id} id={item.id} />
                        ))}
                    </div> */}
                </div>
            ) : (
                <div className="no-result-wrapper">
                    <h3>Không có kết quả tìm kiếm !</h3>
                    <Image src={noResultImage} alt="" className="no-result" />
                </div>
            )}
            <div className="logo-bottom">
                <Image src={logoImage} alt="" className="image" />
            </div>
        </Wrapper>
    );
};

export default SearchResult;
