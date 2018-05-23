import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Collapse from '@material-ui/core/Collapse';
import Add from '@material-ui/icons/Add';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Tooltip from '@material-ui/core/Tooltip';
import CustomIconButton from 'kasifTheme/IconButton';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

const customStyle = {
    listItemText: {
        paddingLeft: 0,
        fontSize: 14,
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
};

const testListData = [
    {id: 1, name: "Layer X"},
    {
        id: 2, name: "Layer Y", children: [
            {id: 4, name: "Layer A"},
            {id: 5, name: "Layer B"},
            {id: 6, name: "Layer C"},
        ]
    },
    {id: 3, name: "Layer Z"},
    {id: 7, name: "Layer Z"},
    {id: 8, name: "Layer Z"},
    {id: 9, name: "Layer Z"},
    {id: 10, name: "Layer Z"},
    {id: 11, name: "Layer Z"},
];


class WmsLayerTree extends React.Component {
    state = {open: true};

    handleClick = () => {
        this.setState({open: !this.state.open});
    };

    createRecursiveTree = (rootItem) => {
        return testListData.map(item => {
            return (<ListItem key={`item-${item.id}-${item}`} button style={customStyle.listItem}>
                <ListItemText disableTypography style={customStyle.listItemText} primary={item.name}/>
                <ListItemSecondaryAction>
                    <Tooltip title="Add Layer">
                        <CustomIconButton>
                            <Add style={{fontSize: 16}}/>
                        </CustomIconButton>
                    </Tooltip>
                </ListItemSecondaryAction>
            </ListItem>)
        })
    };

    render() {
        const {classes} = this.props;

        const layerTree = this.createRecursiveTree(testListData);

        return (
            <div className={classes.root}>
                <List
                    component="nav">
                    {
                        layerTree
                    }
                    <ListItem button style={customStyle.listItem}>
                        <ListItemText style={customStyle.listItemText} primary="Drafts"/>
                    </ListItem>
                    <ListItem button onClick={this.handleClick} style={customStyle.listItem}>
                        <ListItemText style={customStyle.listItemText} primary="Inbox"/>
                        {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button style={customStyle.listItem}>
                                <ListItemText inset primary="Starred"/>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
        );
    }
}

WmsLayerTree.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WmsLayerTree);