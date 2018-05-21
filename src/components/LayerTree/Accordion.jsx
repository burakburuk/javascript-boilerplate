import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Settings from './Settings.jsx';
import ActiveLayers from './ActiveLayers.jsx';

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
});

class Accordion extends React.Component {
    state = {
        settingsExpanded: true
    };

    expandChange = () => {
        this.setState({settingsExpanded: !this.state.settingsExpanded});
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