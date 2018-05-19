import React from 'react';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        //console.dir(props);
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
        this.props.dispatch({type: 'INCREMENT'});
    };

    decrement = () => {
        this.props.dispatch({type: 'DECREMENT'});
    };

    render() {
        return (
            <div id="counter-div">
                <h2>Counter</h2>
                <table cellSpacing={2} cellPadding={5}>
                    <tbody>
                    <tr>
                        <td>
                            <Button onClick={this.decrement} label="-"/>
                        </td>
                        <td>
                            <span id="counter-span">{this.props.count}</span>
                        </td>
                        <td>
                            <Button onClick={this.increment} label="+"/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <Button primary={true} onClick={this.start} label="Start"/>&nbsp;
                            <Button secondary={true} onClick={this.stop} label="Stop"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

//“connect” the Counter component to Redux at the bottom:
function mapStateToProps(state) {
    return {
        count: state.count
    };
}

//Where previously we were exporting the component itself,
//now we’re wrapping it with this connect function call.
export default connect(mapStateToProps)(Counter);






