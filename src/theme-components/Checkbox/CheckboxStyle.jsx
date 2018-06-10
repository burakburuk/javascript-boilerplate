import {
    grayColor,
    roseColor,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor
} from '../ThemeColors.jsx';

const checkboxStyle = {
    boxOutside: {
        width: '24px',
        height: '24px',
    },
    checked: {
        color: infoColor
    },
    checkedIcon: {
        width: '16px',
        height: '16px',
        border: '1px solid rgba(0, 0, 0, .54)',
        borderRadius: '3px',
        fontSize: 16,
        background: infoColor,
        color: '#FFFFFF'
    },
    uncheckedIcon: {
        width: '0px',
        height: '0px',
        padding: '8px',
        border: '1px solid rgba(0, 0, 0, .54)',
        borderRadius: '3px',
    },
};

export default checkboxStyle;
