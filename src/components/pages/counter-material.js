import React from "react";
import { Grid } from "material-ui";

function CounterMaterial({ ...props }) {
    return (
        <Grid container>
            <ItemGrid xs={12} sm={12} md={12}>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12}>
            </ItemGrid>
        </Grid>
    );
}

export default CounterMaterial;