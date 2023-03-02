import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    text,
    onClick,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    rounded = false,
    leftIcon,
    RightIcon,
    children,
    primary,
    ...addProps
}) {
    let Component = 'button';
    const classer = cx('wrapper', {
        primary: primary,
        outline: outline,
        small: small,
        large: large,
        text: text,
        disabled: disabled,
        rounded: rounded,
    });

    const props = {
        onClick,
        ...addProps, //(Vd: như attribite: blank, target thẻ a)
    };
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    return (
        <Component className={classer} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {RightIcon && <span className={cx('icon')}>{RightIcon}</span>}
        </Component>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    RightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
};

export default Button;
