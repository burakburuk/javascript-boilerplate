import React from 'react';
import {Check} from '@material-ui/icons';
import {withStyles, Checkbox} from 'material-ui';
import PropTypes from 'prop-types';
import checkboxStyle from './CheckboxStyle.jsx';

function CustomCheckbox({...props}) {
    const {classes, color, customClass, ...rest} = props;
    return (
        <Checkbox
            {...rest}
            tabIndex={-1}
            checkedIcon={<Check className={classes.checkedIcon}/>}
            icon={<Check style={{fontSize: 16}} className={classes.uncheckedIcon}/>}
            className={
                classes.boxOutside +
                (color ? " " + classes[color] : "") +
                (customClass ? " " + customClass : "")
            }
        />
    );
}

CustomCheckbox.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "white",
        "simple"
    ]),
    customClass: PropTypes.string,
    disabled: PropTypes.bool
};

export default withStyles(checkboxStyle)(CustomCheckbox);