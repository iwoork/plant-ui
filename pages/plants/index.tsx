import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(10, 0),
    },
    avatar: {
      margin: '-25px auto',
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    plant: {
      margin: theme.spacing(2, 1)
    },
    description: {
      height: 120,
      overflow: 'hidden'
    },
    media: {
      height: 200
    }

  })
)
export default function Index() {
  const classes = useStyles();

  const plants = [
    {
      user: {
        name: 'Efren',
        avatar: ''
      },
      listing: {
        name: {
          scientific: 'Adiantum raddianum Fragrans',
          common: 'Delta Maidenhair Fern'
        },
        description: 'Very delicate beautiful fern from the West Indies. The frond stems are black in colour with gorgeous lime green leaves (pinnae). Easy to grow but needs high humidity, really really hates direct sun. An elegant houseplant with black stalks and yellowy green, triangular fronds which appear soft and lacey due to lobed segments in the foliage.Often grown in terrariums and are known to flourish in a steamy bathroom or kitchen. Ultimate indoor height 30-50cm.Slow growing.',
        image: 'https://www.houseofplants.co.uk/Resources/800temp/Adiantum-raddianum-Fragrans-closeup.jpg'
      }
    },
    {
      user: {
        name: 'Efren',
        avatar: ''
      },
      listing: {
        name: {
          scientific: 'Aeschynanthus marmoratus',
          common: 'Zebra Basket Vine'
        },
        description: 'This is a lovely dark green trailing house plant with oval shaped leaves with wonderful detailing in purple. Perfect for hanging baskets. The foliage really is stunning enough but it also flowers (ours here have not yet) ',
        image: 'https://www.houseofplants.co.uk/Resources/800temp/aeschynanthus-marmoratus-detail.jpg'
      }
    },
    {
      user: {
        name: 'Efren',
        avatar: ''
      },
      listing: {
        name: {
          scientific: 'Aechmea "Blue Rain"',
          common: 'Blue rain Bromeliad'
        },
        description: 'A Truly stunning plant, and very very easy to look after. A very long lasting Blue and red flower spike with deep green glossy leaves. A real statement plant.',
        image: 'https://www.houseofplants.co.uk/Resources/800temp/Achmeabluerainflower.jpg'
      }
    }
  ];

  return (
    <Container>
      <Grid container className={classes.root}>
        <Typography variant="h3" component="h1" gutterBottom>
          Plants
        </Typography>
        <Grid container>
          {
            plants.map((plant) =>
              <Grid item sm={3}>
                <Card className={classes.plant}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={plant.listing.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography color="secondary" gutterBottom variant="h5" component="h2">
                        {plant.listing.name.common}
                      </Typography>
                      <Typography gutterBottom variant="body1" component="h3">
                        {plant.listing.name.scientific}
                      </Typography>
                      <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                        {plant.listing.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <SwapHorizontalCircleIcon /> Swaps (12)
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          }
        </Grid>
      </Grid>
    </Container >
  );
}
