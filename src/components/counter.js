import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    app: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    gridItem: {
        textAlign: 'center',
        margin: '10px',
        backgroundColor: theme.palette.background.paper
    }
});

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentWillUnmount = () => {
        clearInterval(this.timer);
    };

    start = () => {
        if (typeof this.timer === 'undefined') {
            this.timer = setInterval(() => {
                this.increment();
            }, 500);
        }
    };

    stop = () => {
        clearInterval(this.timer);
        delete this.timer;
    };

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    };

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    };

    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={3} className={classes.gridItem} >
                            <Button variant="outlined" color="primary" onClick={this.decrement}>-</Button>
                        </Grid>
                        <Grid item xs={3} className={classes.gridItem}>
                            <Typography className={classes.pos} color="textSecondary">
                                {this.props.count}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} className={classes.gridItem}>
                            <Button variant="outlined" color="primary" onClick={this.increment}>+</Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <Button variant="outlined" color="primary" onClick={this.start}>Start</Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <Button variant="outlined" color="primary" onClick={this.stop}>Stop</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

Counter.propTypes = {
    classes: PropTypes.object.isRequired,
};

//“connect” the Counter component to Redux at the bottom:
function mapStateToProps(state) {
    return {
        count: state.count
    };
}

//Where previously we were exporting the component itself,
//now we’re wrapping it with this connect function call.
export default connect(mapStateToProps)(withStyles(styles)(Counter));






