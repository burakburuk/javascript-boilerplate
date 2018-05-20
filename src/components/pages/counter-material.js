import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers/reducer';
import Grid from '@material-ui/core/Grid';
import Counter from '../counter';

const store = createStore(reducer);

class CounterMaterial extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Grid container>
                    <Counter></Counter>
                </Grid>
            </Provider>
        );
    }
}

export default CounterMaterial;