import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchWrapper from './Search.style';
import Input from '../Input';
import Button from '../Button';
import { SearchIcon } from '../Icons';
interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
    const [keywordSearch, setKeyWordSearch] = useState<string>('');
    const navigate = useNavigate();
    const handleChangeKeyWord = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyWordSearch(e.target.value);
    };

    const handleSearchKeyWord = () => {
        navigate(`/search-result/${keywordSearch}`);
    };
    return (
        <SearchWrapper>
            {/* <TippyHeadless
                placement="bottom-start"
                visible={isShowResultSearch}
                offset={[0, 0]}
                render={(attrs) => {
                    return (
                        <Popper className="popper" {...attrs}>
                            <></>
                        </Popper>
                    );
                }}
            > */}
            <Input type="text" className="search-input" onChange={handleChangeKeyWord} value={keywordSearch || ''} />
            {/* </TippyHeadless> */}
            <Button className="search-btn" onClick={handleSearchKeyWord}>
                <SearchIcon width="2rem" height="2rem" className="search-icon" />
            </Button>
        </SearchWrapper>
    );
};

export default Search;
