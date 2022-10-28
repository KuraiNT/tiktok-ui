import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1667138400&x-signature=M%2B7M2DnDhw9v4oOY41Agj8uyAFk%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>ledangkhoa</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Le Dang Khoa</p>
            </div>
        </div>
    );
}

AccountItem.prototype = {};

export default AccountItem;
