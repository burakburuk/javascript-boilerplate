import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {};

class ActiveLayers extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Grid container>
            </Grid>
        )
    }
}

ActiveLayers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActiveLayers);