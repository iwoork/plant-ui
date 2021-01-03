import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(10, 0),
    },
  })
)

// Move typescript to separate files later
interface IProductName {
  common: String,
  scientific: String
}
interface IProduct {
  name: IProductName
}
interface ISwap {
  product: IProduct,
  user: IUser
}
interface IUser {
  name: String,
  location: String
}

export default function ShopsNearby({ product, user }: ISwap) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Typography variant="h3" component="h1" gutterBottom>
        Shops selling {product.name.common} near {user.location}
      </Typography>
    </Grid>
  );
}
