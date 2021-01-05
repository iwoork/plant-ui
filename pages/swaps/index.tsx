import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import LoyaltySharpIcon from '@material-ui/icons/LoyaltySharp';
import StarIcon from '@material-ui/icons/Star';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
export default function Index() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const plants = [
    {
      user: {
        name: 'Polina',
        avatar: '/images/avatar/1.jpg'
      },
      listing: {
        location: 'Toronto, CA',
        type: 'Cuttings',
        name: {
          scientific: 'Adiantum raddianum Fragrans',
          common: 'Delta Maidenhair Fern'
        },
        swap: [
          'Chinese Evergreen'
        ],
        description: 'Very delicate beautiful fern from the West Indies. The frond stems are black in colour with gorgeous lime green leaves (pinnae). Easy to grow but needs high humidity, really really hates direct sun. An elegant houseplant with black stalks and yellowy green, triangular fronds which appear soft and lacey due to lobed segments in the foliage.Often grown in terrariums and are known to flourish in a steamy bathroom or kitchen. Ultimate indoor height 30-50cm.Slow growing.',
        image: 'https://www.houseofplants.co.uk/Resources/800temp/Adiantum-raddianum-Fragrans-closeup.jpg'
      }
    },
    {
      user: {
        name: 'Efren',
        avatar: '/images/avatar/2.jpg'
      },
      listing: {
        location: 'Toronto, CA',
        type: 'Planted, Cuttings',
        name: {
          scientific: 'Aechmea "Blue Rain"',
          common: 'Blue rain Bromeliad'
        },
        swap: [
          'Zebra Basket Vine'
        ],
        description: 'A Truly stunning plant, and very very easy to look after. A very long lasting Blue and red flower spike with deep green glossy leaves. A real statement plant.',
        image: 'https://www.houseofplants.co.uk/Resources/800temp/Achmeabluerainflower.jpg'
      }
    },
    {
      user: {
        name: 'James',
        avatar: '/images/avatar/3.jpg'
      },
      listing: {
        location: 'Toronto, CA',
        type: 'Cuttings',
        name: {
          scientific: 'Aeschynanthus marmoratus',
          common: 'Zebra Basket Vine'
        },
        swap: [
          'Zebra Basket Vine'
        ],
        description: 'This is a lovely dark green trailing house plant with oval shaped leaves with wonderful detailing in purple. Perfect for hanging baskets. The foliage really is stunning enough but it also flowers (ours here have not yet) ',
        image: 'https://www.houseofplants.co.uk/Resources/800temp/aeschynanthus-marmoratus-detail.jpg'
      }
    },
    {
      user: {
        name: 'Anne',
        avatar: '/images/avatar/4.jpg'
      },
      listing: {
        location: 'Toronto, CA',
        type: 'Planted',
        name: {
          scientific: 'Aglaonema cutlass',
          common: 'Chinese evergreen'
        },
        swap: [
          'Snake plant'
        ],
        description: 'Another tough Chinese evergreen. Bold markings on the large thin leaves. Good for low light as well as those of us who are a little erratic with watering!',
        image: 'https://www.houseofplants.co.uk/Resources/800temp/Aglaonema_cutlass_detail.jpg'
      }
    },
  ];

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item sm={2}>
          <Box className={classes.filter}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>Featured</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={false} onChange={(e) => handleChange(e.target.name)} name="airpurifying" />}
                    label="Air purifying"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={false} onChange={(e) => handleChange(e.target.name)} name="easycare" />}
                    label="Easy care"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={false} onChange={(e) => handleChange(e.target.name)} name="hangingplant" />}
                    label="Hanging plant"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={false} onChange={(e) => handleChange(e.target.name)} name="lowlight" />}
                    label="Low light"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={false} onChange={(e) => handleChange(e.target.name)} name="petfriendly" />}
                    label="Pet Friendly"
                  />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>Type</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                  diam eros in elit. Pellentesque convallis laoreet laoreet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>Size</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                  vitae egestas augue. Duis vel est augue.
              </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>Light</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={false} onChange={(e) => handleChange(e.target.name)} name="gilad" />}
                    label="Low"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={false} onChange={(e) => handleChange(e.target.name)} name="jason" />}
                    label="Medium"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={false} onChange={(e) => handleChange(e.target.name)} name="antoine" />}
                    label="Bright"
                  />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
        <Grid item sm={10}>
          <Typography variant="h3" component="h1" gutterBottom>
            Swaps near you
          </Typography>
          <Grid container>
            {
              plants.map((plant) =>
                <Grid item sm={3}>
                  <Card className={classes.plant}>
                    <CardActionArea href={`/swaps/1`}>
                      <CardMedia
                        className={classes.media}
                        image={plant.listing.image}
                        title="Contemplative Reptile"
                      />
                      <Avatar className={classes.avatar} alt="Remy Sharp" src={plant.user.avatar} />
                      <CardContent>
                        <Typography className={classes.name} color="secondary" gutterBottom variant="h5" component="h2">
                          {plant.listing.name.common}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="h3">
                          {plant.user.name} ({plant.listing.location}) <StarIcon className={classes.icon} /><StarIcon className={classes.icon} /><StarIcon className={classes.icon} /><StarIcon className={classes.icon} /><StarIcon className={classes.icon} />
                        </Typography>
                        <Typography gutterBottom variant="body2" component="p">
                          <LoyaltySharpIcon className={classes.icon} /> {plant.listing.type}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="p">
                          <SwapHorizIcon className={classes.icon} /> Swap for {plant.listing.swap}
                        </Typography>
                        <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                          {plant.listing.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            }
          </Grid>
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
                      <Avatar className={classes.avatar} alt="Remy Sharp" src={plant.user.avatar} />
                      <CardContent>
                        <Typography className={classes.name} color="secondary" gutterBottom variant="h5" component="h2">
                          {plant.listing.name.common}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="h3">
                          {plant.user.name} ({plant.listing.location})
                        </Typography>
                        <Typography gutterBottom variant="body2" component="p">
                          <LoyaltySharpIcon className={classes.icon} /> {plant.listing.type}
                        </Typography>
                        <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                          {plant.listing.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            }
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
                      <Avatar className={classes.avatar} alt="Remy Sharp" src={plant.user.avatar} />
                      <CardContent>
                        <Typography className={classes.name} color="secondary" gutterBottom variant="h5" component="h2">
                          {plant.listing.name.common}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="h3">
                          {plant.user.name} ({plant.listing.location})
                      </Typography>
                        <Typography gutterBottom variant="body2" component="p">
                          <LoyaltySharpIcon className={classes.icon} /> {plant.listing.type}
                        </Typography>
                        <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                          {plant.listing.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            }
          </Grid>
        </Grid>
      </Grid>
    </Container >
  );
}
