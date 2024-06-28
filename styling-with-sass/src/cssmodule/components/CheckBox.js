import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';
import styles from './CheckBox.module.css';
import classNames from "classnames/bind";
// 1 CheckBox 생성
// 2 CheckBox icon 사용
// react-icons 설치 Font Awesome, Ionicons, MaterialIcons, etc.
// 3 classNames/bind -> classnames.bind(styles);
//   const cx = classNames.bind(styles);
const cx = classNames.bind(styles);

function CheckBox({children, checked, ...rest}) {
    return (
        <div className={cx('checkbox')}> {/* className={cx('checkbox test' */}
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div className={cx('icon')}>
                    {checked ? 
                    <MdCheckBox className={cx('checked-icon')} /> 
                    : 
                    <MdCheckBoxOutlineBlank /> }
                    </div>
            </label>
            <span>{children}</span>
        </div>
    )
    
}

export default CheckBox;