import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Counter = props => {
    return (
        <div id="counter-div">
            <h2>Counter</h2>
            <table cellSpacing={2} cellPadding={5}>
                <tbody>
                <tr>
                    <td>
                        <RaisedButton onClick={props.decrement} label="-"/>
                    </td>
                    <td>
                        <span id="counter-span">{props.count}</span>
                    </td>
                    <td>
                        <RaisedButton onClick={props.increment} label="+"/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}>
                        <RaisedButton primary={true} onClick={props.start} label="Start"/>&nbsp;
                        <RaisedButton secondary={true} onClick={props.stop} label="Stop"/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Counter;