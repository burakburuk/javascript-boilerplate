import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classNames from "classnames";

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Language from '@material-ui/icons/Language';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import VpnLock from '@material-ui/icons/VpnLock';

import WmsLayerTree from './WmsLayerTree.jsx';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    menu: {
        width: 200,
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
    margin: {
        margin: theme.spacing.unit,
    },
});

class LayerAdditionPopup extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Layer Settings"}</DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <TextField fullWidth
                                               className={classes.margin}
                                               label="Url"
                                               placeholder="hostname:port/wms?service=wms..."
                                               InputProps={{
                                                   startAdornment: (
                                                       <InputAdornment position="start">
                                                           <VpnLock/>
                                                       </InputAdornment>
                                                   ),
                                               }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        className={classes.margin}
                                        label="Username"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle/>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        className={classes.margin}
                                        type="password"
                                        label="Password"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Lock/>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className={classes.button} variant="raised"
                                size="small" color="secondary">
                            <Language className={classNames(classes.leftIcon, classes.iconSmall)}/>
                            Get WMS From Server
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography className={classes.margin} variant="subheading" gutterBottom>
                            Layer List
                        </Typography>
                        <Divider/>
                        <WmsLayerTree></WmsLayerTree>
                    </Grid>
                    <DialogContentText id="alert-dialog-description">

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="primary">
                        Disagree </Button>
                    <Button onClick={this.props.onClose} color="primary" autoFocus>
                        Agree </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

LayerAdditionPopup.propTypes = {
    classes: PropTypes.object.isRequired,
};

LayerAdditionPopup.defaultProps = {
    open: false
};

export default withStyles(styles)(LayerAdditionPopup);