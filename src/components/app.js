import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../reducers/reducer';
import CounterMaterial from "./pages/counter-material";

const store = createStore(reducer);

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <CounterMaterial></CounterMaterial>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;





