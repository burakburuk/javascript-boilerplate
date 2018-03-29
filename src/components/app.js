import React from "react";
// import MUtil from "./utils";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Person from './person';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personList: [],
            resultBox: "",
            selected: null,
            showProgress: false,
            disableButton: false
        };
    }

    componentDidMount() {
        this.getPersonList();
    }

    getAllPersonList = async () => {
        try {
            let personList = await axios.get(_host + 'person');
            return personList.data;
        } catch (error) {
            throw new Error("Person list could not be fetched! " + error);
        }
    };

    getPersonList = async () => {
        let _personList = await this.getAllPersonList();
        var _state = {
            personList: _personList
        };
        if (_personList.length > 0) {
            _state.selected = 1;
        }

        this.setState(_state);
    };

    getPersonAddress = async (personId) => {
        try {
            if (personId) {
                this.setState({
                    showProgress: true
                });
                let person = await axios.get(_host + 'person/' + personId);
                let address = await axios.get(_host + 'address/' + person.data.id);
                this.setState({
                    showProgress: false
                });

                return Object.assign(person.data, address.data);

            } else {
                this.setState({
                    showProgress: false
                });
                throw new Error("Please Select Person!");
            }
        } catch (err) {
            this.setState({
                showProgress: false,
                disableButton: false
            });
            throw new Error(err);
        }
    };

    onSubmit = async () => {
        try {
            this.setState({
                showProgress: true,
                disableButton: true
            });
            let result = await this.getPersonAddress(this.state.selected);
            var _box = "Person : " + result.name + " " + result.surname + ", City : " + result.city;
            this.setState({
                resultBox: _box,
                showProgress: false,
                disableButton: false
            });
        } catch (error) {
            this.setState({
                resultBox: error
            });
        }
    };

    handleChange = (value) => {
        this.setState({
            selected: value
        });
    };

    render() {
        return (
            <MuiThemeProvider>
                <Person onSubmit={this.onSubmit} personList={this.state.personList}
                        selected={this.state.selected} resultBox={this.state.resultBox}
                        handleChange={this.handleChange} showProgress={this.state.showProgress}
                        disableButton={this.state.disableButton}></Person>
            </MuiThemeProvider>
        );
    }
}

export default App;