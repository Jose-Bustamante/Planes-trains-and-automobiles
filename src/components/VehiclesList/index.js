import React from "react";
import Vehicle from "../Vehicle";
import Grid from "@material-ui/core/Grid";

export default function SingleLineGridList({ planesTrainsCars }) {
  return (
    <Grid item xs={12}>
      <Grid container justify="center">
        {planesTrainsCars.map((vehicle) => (
          <Vehicle
            key={vehicle.id}
            img={vehicle.img}
            colors={vehicle.colors}
            brand={vehicle.brand}
            vehicleType={vehicle.type}
          />
        ))}
      </Grid>
    </Grid>
  );
}
