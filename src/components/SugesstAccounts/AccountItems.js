import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(styles);

function AccountItem() {
    const renderPriview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy offset={[-20, 0]} interactive delay={[800, 0]} render={renderPriview} placement="bottom">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg"
                        alt="hong"
                    ></img>
                    <div className={cx('item-info')}>
                        <p className={cx('nick-name')}>
                            <strong>Anh HTRIEU</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                        </p>

                        <p className={cx('name')}>DZ</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
