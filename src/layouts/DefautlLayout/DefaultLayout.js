import Header from '../components/Header/Header';
import SlideBar from '../components/SlideBar/SlideBar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SlideBar />
                <div className={cx('content')}>{children} </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
