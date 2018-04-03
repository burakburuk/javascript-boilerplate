import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Calculator from './calculator';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: 0
        };
    }

    handleClick = (sum) => {
        this.setState({result: sum});
    };

    render() {
        return (
            <MuiThemeProvider>
                <Calculator handleClick={this.handleClick}
                            result={this.state.result}></Calculator>
            </MuiThemeProvider>
        );
    }
}

export default App;