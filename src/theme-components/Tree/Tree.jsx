import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import treeStyle from './TreeStyle.jsx';

import List from '@material-ui/core/List';

class CustomTree extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <List component="nav" className={classes.root}>
                {
                    this.props.children
                }
            </List>
        );
    }
}

CustomTree.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(treeStyle)(CustomTree);