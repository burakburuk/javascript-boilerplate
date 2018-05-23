import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CustomCheckbox from 'kasifTheme/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
    size: {
        width: 40,
        height: 40,
    },
    sizeIcon: {
        fontSize: 23,
    },
    label: {
        fontSize: 10
    },
    checkboxFont: {
        fontSize: 13,
    },
};

class Settings extends React.Component {

    state = {
        showGridLines: false,
        showNavigation: true,
        enableTerrain: false,
        showStationModel: false,
        showScalebar: true,
        showDrawingPanel: true,
        showOverviewPanel: true,
        showStatusbar: true,
        dayNightLightning: false,
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.checked});
    };

    render() {
        const {classes} = this.props;

        return (
            <Grid container>
                <Grid item xs={12}>
                    <Grid container spacing={8}>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <CustomCheckbox
                                        checked={this.state.showGridLines}
                                        onChange={this.handleChange('showGridLines')}
                                        value="showGridLines"
                                    />
                                }
                                label={
                                    <Typography className={classes.checkboxFont}>
                                        Show Grid Lines
                                    </Typography>
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <CustomCheckbox
                                        checked={this.state.showNavigation}
                                        onChange={this.handleChange('showNavigation')}
                                        value="showNavigation"
                                    />
                                }
                                label={
                                    <Typography className={classes.checkboxFont}>
                                        Show Navigation
                                    </Typography>
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <CustomCheckbox
                                        checked={this.state.enableTerrain}
                                        onChange={this.handleChange('enableTerrain')}
                                        value="enableTerrain"
                                    />
                                }
                                label={
                                    <Typography className={classes.checkboxFont}>
                                        Enable Terrain
                                    </Typography>
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <CustomCheckbox
                                        checked={this.state.showStationModel}
                                        onChange={this.handleChange('showStationModel')}
                                        value="showStationModel"
                                    />
                                }
                                label={
                                    <Typography className={classes.checkboxFont}>
                                        Show Station Model
                                    </Typography>
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <CustomCheckbox
                                        checked={this.state.showScalebar}
                                        onChange={this.handleChange('showScalebar')}
                                        value="showScalebar"
                                    />
                                }
                                label={
                                    <Typography className={classes.checkboxFont}>
                                        Show Scalebar
                                    </Typography>
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <CustomCheckbox
                                        checked={this.state.showDrawingPanel}
                                        onChange={this.handleChange('showDrawingPanel')}
                                        value="showDrawingPanel"
                                    />
                                }
                                label={
                                    <Typography className={classes.checkboxFont}>
                                        Show Drawing Panel
                                    </Typography>
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <CustomCheckbox
                                        checked={this.state.showOverviewPanel}
                                        onChange={this.handleChange('showOverviewPanel')}
                                        value="showOverviewPanel"
                                    />
                                }
                                label={
                                    <Typography className={classes.checkboxFont}>
                                        Show Overview Panel
                                    </Typography>
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <CustomCheckbox
                                        checked={this.state.showStatusbar}
                                        onChange={this.handleChange('showStatusbar')}
                                        value="showStatusbar"
                                    />
                                }
                                label={
                                    <Typography className={classes.checkboxFont}>
                                        Show Statusbar
                                    </Typography>
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <CustomCheckbox
                                        checked={this.state.dayNightLightning}
                                        onChange={this.handleChange('dayNightLightning')}
                                        value="dayNightLightning"
                                    />
                                }
                                label={
                                    <Typography className={classes.checkboxFont}>
                                        Day/Night Lightning
                                    </Typography>
                                }
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Settings);