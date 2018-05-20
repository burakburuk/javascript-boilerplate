import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers/reducer';
import Grid from '@material-ui/core/Grid';
import Accordion from '../LayerTree/Accordion.jsx';

const store = createStore(reducer);

class LayerTreePage extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Grid container>
                    <Accordion></Accordion>
                </Grid>
            </Provider>
        );
    }
}

export default LayerTreePage;