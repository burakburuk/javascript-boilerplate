import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const styles = {};

class UnitConverter extends React.Component {
    state = {
        open1: false,
        open2: false,
    };

    openPopup1 = () => {
        this.setState({ open1: true });
    };

    closePopup1 = () => {
        this.setState({ open1: false });
    };

    openPopup2 = () => {
        this.setState({ open2: true });
    };

    closePopup2 = () => {
        this.setState({ open2: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Button variant="outlined" color="primary" onClick={this.openPopup1}>Popup 1</Button>
                            <Dialog
                                open={this.state.open1}
                                onClose={this.closePopup1}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description" >
                                <DialogTitle id="alert-dialog-title">{"Popup 1"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Test... </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.closePopup1} color="primary">
                                        Disagree </Button>
                                    <Button onClick={this.closePopup1} color="primary" autoFocus>
                                        Agree </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="outlined" color="secondary" onClick={this.openPopup2}>Popup 2</Button>
                            <Dialog
                                open={this.state.open2}
                                onClose={this.closePopup2}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description" >
                                <DialogTitle id="alert-dialog-title">{"Popup 2"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Test... </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.closePopup2} color="primary">
                                        Disagree </Button>
                                    <Button onClick={this.closePopup2} color="primary" autoFocus>
                                        Agree </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

UnitConverter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UnitConverter);