import classNames from 'classnames/bind';
import Button from '../../Buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPreivew.module.scss';
const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg"
                    alt="hong"
                ></img>
                <div className={cx('primary-btn')}>
                    <Button small primary>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>htrieuu__</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>

                <p className={cx('name')}>DZ</p>
                <p className={cx('analyis')}>
                    <strong className={cx('value')}>5.2M </strong>
                    <span className={cx('lable')}>Followers </span>
                    <strong className={cx('value')}>11.2M </strong>
                    <span className={cx('lable')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
