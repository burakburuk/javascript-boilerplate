import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Settings from './Settings.jsx';
import ActiveLayers from './ActiveLayers.jsx';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Save from '@material-ui/icons/Save';
import Language from '@material-ui/icons/Language';
import LayerAdditionPopup from './LayerAdditionPopup.jsx';

const styles = theme => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    panelContent: {
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
    },
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 16,
    },
});

class Accordion extends React.Component {
    state = {
        settingsExpanded: true,
        layerAdditionPopupOpen: false,
    };

    expandChange = () => {
        this.setState({settingsExpanded: !this.state.settingsExpanded});
    };

    openLayerAdditionPopup = () => {
        this.setState({layerAdditionPopupOpen: true});
    };

    onLayerAdditionPopupClose = () => {
        this.setState({layerAdditionPopupOpen: false});
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <ExpansionPanel expanded={this.state.settingsExpanded} onChange={this.expandChange}>
                    <ExpansionPanelDetails>
                        <Settings></Settings>
                    </ExpansionPanelDetails>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography className={classes.heading}>Settings</Typography>
                    </ExpansionPanelSummary>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography className={classes.heading}>Active Layers</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelContent}>
                        <ActiveLayers></ActiveLayers>
                        <LayerAdditionPopup open={this.state.layerAdditionPopupOpen}
                                            onClose={this.onLayerAdditionPopupClose}></LayerAdditionPopup>
                    </ExpansionPanelDetails>
                    <Divider/>
                    <ExpansionPanelActions>
                        <Button onClick={this.openLayerAdditionPopup} className={classes.button} variant="raised"
                                size="small" color="secondary">
                            <Language className={classNames(classes.leftIcon, classes.iconSmall)}/>
                            Get From Server
                        </Button>
                        <Button className={classes.button} variant="raised" size="small" color="primary">
                            <Save className={classNames(classes.leftIcon, classes.iconSmall)}/>
                            Save Settings
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography className={classes.heading}>System Layers</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelContent}>
                        Test1
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography className={classes.heading}>Meteorology Layers</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelContent}>
                        Test2
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

Accordion.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Accordion);