import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import PropTypes from 'prop-types';

import AccountItem from './AccountItems';

const cx = classNames.bind(styles);

function SuggestAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('see-more')}>See all</p>
        </div>
    );
}

SuggestAccount.prototypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccount;
