import classNames from 'classnames/bind';
import config from '~/config';
import styles from './SliderBar.module.scss';
import Menu, { MenuItems } from './Menu';
import {
    FollowIcon,
    FollowActiveIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
} from '~/components/Icons/Icons';
import SuggestAccount from '~/components/SugesstAccounts';
const cx = classNames.bind(styles);
function SlideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItems
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItems>
                <MenuItems
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowIcon />}
                    activeIcon={<FollowActiveIcon />}
                ></MenuItems>
                <MenuItems
                    title="Live"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                ></MenuItems>
            </Menu>
            <SuggestAccount label="Suggest accounts" />
            <SuggestAccount label="Following accounts" />
        </aside>
    );
}

export default SlideBar;
