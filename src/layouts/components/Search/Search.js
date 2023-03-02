import { useState, useRef, useEffect } from 'react';

import Tippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/Service/searchService';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSerachResults] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);

    const inputValue = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSerachResults([]);
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);

            setSerachResults(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounced]);

    const handlerClear = () => {
        setSearchValue('');
        setSerachResults([]);
        inputValue.current.focus();
    };

    const handleHideResults = () => {
        setShowResults(false);
    };

    const handlechange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleSubmit = (e) => {};

    return (
        <div>
            <Tippy
                interactive
                visible={showResults && searchResults.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <span className={cx('search-title')}>Account</span>
                            {searchResults.map((item) => {
                                return <AccountItem key={item.id} data={item} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResults}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputValue}
                        value={searchValue}
                        type="text"
                        name=""
                        placeholder="Search..."
                        spellCheck={false}
                        onChange={handlechange}
                        onFocus={() => setShowResults(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear-btn')} onClick={handlerClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onClick={handleSubmit} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
