import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d21919c71bab1fe7cb474005a517637a~c5_300x300.webp?lk3s=a5d48078&nonce=8633&refresh_token=af13a464e48396f5115c0d972304c029&x-expires=1727341200&x-signature=8n%2FHNxNPC5IBPLUAjILCJZ%2Fz%2Fm0%3D&shp=a5d48078&shcp=c1333099"
                alt="BaoBinh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Lê Bảo Bình</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>lebaobinh</span>
            </div>
        </div>
    );
}

export default AccountItem;
