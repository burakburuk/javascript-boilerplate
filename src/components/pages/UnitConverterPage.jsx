import React from "react";
import Grid from '@material-ui/core/Grid';
import UnitConverter from '../UnitConverter/UnitConverter.jsx';

class UnitConverterPage extends React.Component {
    render() {
        return (
            <Grid container>
                <UnitConverter></UnitConverter>
            </Grid>
        );
    }
}

export default UnitConverterPage;