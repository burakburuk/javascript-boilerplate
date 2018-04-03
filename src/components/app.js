import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Counter from './counter';

class App extends React.Component {

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
        this.timer = setInterval(() => {
            this.setState((prevState, props) => {
                return {
                    count: prevState.count + 1
                }
            })
        }, 500);
    };

    stop = () => {
        clearInterval(this.timer);
    };

    increment = () => {
        this.setState((prevState, props) => {
            return {
                count: prevState.count + 1
            }
        })
    };

    decrement = () => {
        this.setState((prevState, props) => {
            return {
                count: prevState.count - 1
            }
        })
    };

    render() {
        return (
            <MuiThemeProvider>
                <Counter count={this.state.count} increment={this.increment} decrement={this.decrement}
                         start={this.start} stop={this.stop}></Counter>
            </MuiThemeProvider>
        );
    }
}

export default App;