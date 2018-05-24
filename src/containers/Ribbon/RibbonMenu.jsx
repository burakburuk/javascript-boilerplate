import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabItemContainer from './TabItemContainer.jsx';
import LayerTreePage from '../../components/pages/LayerTreePage.jsx';
import UnitConverterPage from '../../components/pages/UnitConverterPage.jsx';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import FilterList from '@material-ui/icons/FilterList';
import SwapHoriz from '@material-ui/icons/SwapHoriz';

const styles = theme => ({
    root: {
        zIndex: 99,
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    tabItem: {
        paddingLeft: '4px',
        paddingRight: '4px',
    },
    tabsRoot: {
        background: '#00acc1',
    },
    tabsIndicator: {
        backgroundColor: theme.palette.common.white,
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 60,
        color: theme.palette.text.disabled,
        '&:hover': {
            color: theme.palette.text.disabled,
            opacity: 1,
        },
        '&$tabSelected': {
            color: theme.palette.common.white,
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: theme.palette.common.white,
        },
    },
    tabSelected: {},
    labelContainer: {
        paddingLeft: 12,
        paddingRight: 12,
    },
});

class RibbonMenu extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        classes={{root: classes.tabsRoot, indicator: classes.tabsIndicator}}
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto">
                        <Tab classes={{
                            root: classes.tabRoot,
                            labelContainer: classes.labelContainer,
                            selected: classes.tabSelected
                        }}
                             label="Layer 3" icon={<FilterList/>}/>
                        <Tab classes={{root: classes.tabRoot, labelContainer: classes.labelContainer}}
                             label="Converter" icon={<SwapHoriz/>}/>
                        <Tab classes={{root: classes.tabRoot, labelContainer: classes.labelContainer}}
                             icon={<PersonPinIcon/>}/>
                        <Tab classes={{root: classes.tabRoot, labelContainer: classes.labelContainer}}
                             icon={<PersonPinIcon/>}/>
                        <Tab classes={{root: classes.tabRoot, labelContainer: classes.labelContainer}}
                             icon={<PersonPinIcon/>}/>
                        <Tab classes={{root: classes.tabRoot, labelContainer: classes.labelContainer}}
                             icon={<PersonPinIcon/>}/>
                        <Tab classes={{root: classes.tabRoot, labelContainer: classes.labelContainer}}
                             icon={<PersonPinIcon/>}/>
                    </Tabs>
                </AppBar>
                {value === 0 && <TabItemContainer>
                    <LayerTreePage></LayerTreePage>
                </TabItemContainer>}
                {value === 1 && <TabItemContainer>
                    <UnitConverterPage></UnitConverterPage>
                </TabItemContainer>}
                {value === 2 && <TabItemContainer>Item Three</TabItemContainer>}
                {value === 3 && <TabItemContainer>Item Four</TabItemContainer>}
                {value === 4 && <TabItemContainer>Item Five</TabItemContainer>}
                {value === 5 && <TabItemContainer>Item Six</TabItemContainer>}
                {value === 6 && <TabItemContainer>Item Seven</TabItemContainer>}
            </div>
        );
    }
}

RibbonMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RibbonMenu);

