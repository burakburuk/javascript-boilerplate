import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Calculator extends Component {
    static propTypes = {
        num1: PropTypes.number,
        num2: PropTypes.number,
        result: PropTypes.number,
        handleClick: PropTypes.func
    };

    static defaultProps = {
        num1: 0,
        num2: 0,
        result: 0,
        handleClick: () => {
        }
    };

    handleClick = () => {
        const inputNum1 = this.refs.refNum1.getValue();
        const inputNum2 = this.refs.refNum2.getValue();

        this.props.handleClick(parseInt(inputNum1) + parseInt(inputNum2));
    };

    render() {
        return (
            <div>
                <TextField ref="refNum1" floatingLabelText="First Number"/>
                <TextField ref="refNum2" floatingLabelText="Second Number"/>
                <TextField disabled={true} floatingLabelText="Result" value={this.props.result.toString()}/>

                <RaisedButton label="click" onClick={this.handleClick}/>
            </div>
        );
    }
}

// Calculator.defaultProps = {
//     num1: 0
// };
//
// Calculator.propTypes = {
//     num1: PropTypes.number
// };

export default Calculator;