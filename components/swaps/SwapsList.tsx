import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import LoyaltySharpIcon from '@material-ui/icons/LoyaltySharp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(10, 0),
    },
    heading: {},
    filter: {
      margin: theme.spacing(10, 0),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(0)
      },
    },
    avatar: {
      margin: '-50px auto 0 auto',
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    plant: {
      margin: theme.spacing(2, 1)
    },
    name: {
      height: 30,
      overflow: 'hidden'
    },
    description: {
      height: 100,
      overflow: 'hidden'
    },
    media: {
      height: 120
    },
    icon: {
      fontSize: 12
    },
  })
)

// Move typescript to separate files later
interface IProductName {
  common: string,
  scientific: string
}
interface IProduct {
  type: string,
  name: IProductName,
  swap: string,
  description: string,
  image: string,
}
interface ISwap {
  product: IProduct,
  user: IUser
}
interface IUser {
  name: string,
  avatar: string,
  location: string
}

export default function SwapsList([swaps]: ISwap) {
  const classes = useStyles();

  return (
    <>
      {
        swaps.map((swap) =>
          <Grid item sm={3}>
            <Card className={classes.plant}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={swap.product.image}
                  title="Contemplative Reptile"
                />
                <Avatar className={classes.avatar} alt="Remy Sharp" src={swap.user.avatar} />
                <CardContent>
                  <Typography className={classes.name} color="secondary" gutterBottom variant="h5" component="h2">
                    {swap.product.name.common}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="h3">
                    {swap.user.name} ({swap.user.location})
                </Typography>
                  <Typography gutterBottom variant="body2" component="p">
                    <LoyaltySharpIcon className={classes.icon} /> {swap.product.type}
                  </Typography>
                  <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                    {swap.product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )
      }
    </>
  );
}
