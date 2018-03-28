import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import CircularProgress from 'material-ui/CircularProgress';

class Person extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (event, index, value) => {
        this.props.handleChange(value);
    };

    onSubmit = () => {
        this.props.onSubmit(this.props.selected);
    };

    render() {
        let personList = [];
        if (this.props.personList) {
            this.props.personList.forEach(function (item) {
                personList.push(<MenuItem key={item.id} value={item.id} primaryText={item.name + " " + item.surname}/>);
            });
        }

        return (
            <div className="container">
                <table className="container">
                    <tbody>
                    <tr>
                        <td>
                            <DropDownMenu value={this.props.selected} onChange={this.handleChange} style={{width: 200}}>
                                {personList}
                            </DropDownMenu>
                        </td>
                        <td>
                            <RaisedButton label="Search" primary={true} disabled={this.props.disableButton}
                                          onClick={this.onSubmit}/>
                        </td>
                        <td>
                            {this.props.showProgress ? <CircularProgress/> : null}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <TextField
                                hintText="Result..."
                                value={this.props.resultBox.toString()}
                                multiLine={true}
                                rows={2}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Person;