import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Collapse from '@material-ui/core/Collapse';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

import Tooltip from '@material-ui/core/Tooltip';
import CustomIconButton from 'kasifTheme/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        height: 150,
        maxHeight: 150,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    primary: {
        fontSize: 14,
    },
    container: {
        paddingLeft: 20,
    },
});

const customStyle = {
    listItemText: {},
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
};

const testListData = [
    {
        id: 1, name: "10.0.126.34", children: [
            {
                id: 2, name: "Other", children: [
                    {id: 4, name: "Spearfish"},
                    {id: 5, name: "Tasmania"},
                    {id: 5, name: "TIGER New York"},
                ]
            },
            {
                id: 3, name: "WCS", children: [
                    {id: 4, name: "ANTALYA1"},
                    {id: 5, name: "ANTALYA2"},
                    {id: 5, name: "A sample ArcGrid file"},
                    {id: 5, name: "Pk50095"},
                    {id: 5, name: "mosaic"},
                    {id: 5, name: "Spearfish elevation"},
                    {id: 5, name: "n39"},
                ]
            },
        ]
    },

];


class WmsLayerTree extends React.Component {
    state = {
        treeState: {}
    };

    handleToggle = (value) => {
        const {treeState} = this.state;
        const newChecked = Object.assign({}, treeState);
        newChecked['ind-' + value] = treeState['ind-' + value] ? !treeState['ind-' + value] : true;

        this.setState({
            treeState: newChecked,
        });
    };

    recursiveCall = (_rootItem) => {
        let rootItem = JSON.parse(JSON.stringify(_rootItem));
        if (typeof rootItem === "undefined" || typeof rootItem.id === "undefined") {
            throw new Error("id parameter must be specified in tree node!");
        }
        const isOpen = this.state.treeState['ind-' + rootItem.id] ? this.state.treeState['ind-' + rootItem.id] : false;
        const {classes} = this.props;

        if (typeof rootItem.children !== "undefined") {
            let nodes = [];
            while (rootItem.children.length > 0) {
                nodes.push(this.recursiveCall(rootItem.children.shift()));
            }
            return [(<ListItem key={`item-${rootItem.id}-${new Date()}`} button
                               onClick={this.handleToggle.bind(this, rootItem.id)}
                               style={customStyle.listItem} disableGutters>
                <ListItemIcon>
                    {isOpen ? <Remove style={{fontSize: 16, marginRight: -8}}/> :
                        <Add style={{fontSize: 16, marginRight: -8}}/>}
                </ListItemIcon>
                <ListItemText className={classes.inset} className={classes.primary} disableTypography
                              primary={rootItem.name}/>
            </ListItem>),
                (<Collapse className={classes.container} key={`collapse-${rootItem.id}-${new Date()}`}
                           in={isOpen}
                           unmountOnExit>
                    <List component="div" disablePadding>
                        {nodes}
                    </List>
                </Collapse>)];
        } else {
            return (
                [<ListItem key={`item-${rootItem.id}-${new Date()}`} style={customStyle.listItem} disableGutters button>
                    <ListItemIcon>
                        <Remove style={{fontSize: 16, marginRight: -8}}/>
                    </ListItemIcon>
                    <ListItemText className={classes.inset} className={classes.primary} disableTypography
                                  primary={rootItem.name}/>
                    <ListItemSecondaryAction>
                        <Tooltip title="Add Layer">
                            <CustomIconButton>
                                <Add style={{fontSize: 16}}/>
                            </CustomIconButton>
                        </Tooltip>
                    </ListItemSecondaryAction>
                </ListItem>]
            );
        }
    };

    render() {
        const {classes} = this.props;

        let layerTree = [];
        for (let i = 0; i < testListData.length; i++) {
            const item = this.recursiveCall(testListData[i]);
            layerTree.push(...item);
        }

        return (
            <List component="nav" className={classes.root}>
                {
                    layerTree
                }
            </List>
        );
    }
}

WmsLayerTree.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WmsLayerTree);