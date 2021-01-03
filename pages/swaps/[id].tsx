import React from 'react';
import ImageGallery from 'react-image-gallery';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StarIcon from '@material-ui/icons/Star';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { Breadcrumbs } from 'nextjs-breadcrumbs';


import 'react-image-gallery/styles/css/image-gallery.css';
import { Avatar } from '@material-ui/core';
import ShopsNearby from '../../components/shops/ShopsNearby';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(10),
    },
    icon: {
      fontSize: 12
    },
    info: {
      padding: theme.spacing(2)
    },
    image: {
      maxWidth: '100%',
    },
    add: {
      margin: 10,
    },
    panel: {
      textAlign: 'center',
      margin: theme.spacing(1)
    },
    avatar: {}
  }),
);


interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const Index = () => {
  const breadcrumbs = Breadcrumbs()
  const classes = useStyles()
  const [value, setValue] = React.useState(0);

  //const { id } = router.query

  const swap = {
    product: {
      name: {
        scientific: '',
        common: 'Chinese Evergreen'
      },
      images: [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1020/1000/600/',
          thumbnail: 'https://picsum.photos/id/1020/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1021/1000/600/',
          thumbnail: 'https://picsum.photos/id/1021/250/150/',
        },
      ]
    },
    user: {
      name: 'Polina',
      location: 'Toronto, CA'
    },

  }

  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={1}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const a11yProps = (index: any) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Container className={classes.root}>
      <Grid container>
        {breadcrumbs}
      </Grid>
      <Grid container>
        <Grid sm={7}>
          <ImageGallery items={swap.product.images} thumbnailPosition="left" showNav={false} showPlayButton={false} showFullscreenButton={false} />
        </Grid>
        <Grid sm={5}>
          <Box className={classes.info}>
            <Typography variant="h4" component="h1" gutterBottom>
              Chinese Evergreen
            </Typography>
            <Grid container>
              <Grid item sm={11}>
                <Typography gutterBottom variant="body2" component="p">
                  Listed by:
                </Typography>
                <Typography gutterBottom variant="body1" component="h3">
                  Efren (Toronto, CA)
                </Typography>
                <Typography gutterBottom variant="body1" component="h3">
                  <StarIcon className={classes.icon} /><StarIcon className={classes.icon} /><StarIcon className={classes.icon} /><StarIcon className={classes.icon} /><StarIcon className={classes.icon} />
                </Typography>
              </Grid>
              <Grid item sm={1}>
                <Avatar className={classes.avatar} alt="Remy Sharp" src="/images/avatar/1.jpg" />
              </Grid>
            </Grid>
            <Typography gutterBottom variant="body2" component="p">
              <SwapHorizIcon className={classes.icon} /> Swap for Snake plant
            </Typography>
          </Box>
          <Box className={classes.info}>
            <Tabs value={value} onChange={(_e, value) => setValue(value)} aria-label="simple tabs example">
              <Tab component="div" label="About" {...a11yProps(0)} />
              <Tab component="div" label="Comments" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              test
            </TabPanel>
            <TabPanel value={value} index={1}>
              List of suppliers participating in the auction
          </TabPanel>
            <TabPanel value={value} index={2}>
              List of buyers participating in the auction
          </TabPanel>
          </Box>
        </Grid>
      </Grid>
      <ShopsNearby product={swap.product} user={swap.user} />
    </Container >
  )
}

export default Index