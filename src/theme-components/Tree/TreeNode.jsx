import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import treeNodeStyle, {customStyle} from './TreeNodeStyle.jsx';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Tooltip from '@material-ui/core/Tooltip';
import Collapse from '@material-ui/core/Collapse';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

class CustomTreeNode extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <ListItem key={`item-${this.props.id}-${new Date()}`} style={customStyle.listItem} disableGutters button>
                <ListItemIcon>
                    <Remove style={{fontSize: 16, marginRight: -8}}/>
                </ListItemIcon>
                <ListItemText className={classes.primary} disableTypography
                              primary={this.props.label}/>
            </ListItem>
        );
    }
}

CustomTreeNode.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(treeNodeStyle)(CustomTreeNode);