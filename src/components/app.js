import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Counter from './counter';
import reducer from '../reducers/reducer';

const store = createStore(reducer);

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <Counter></Counter>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;