import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(10, 0),
    },
    form: {
      display: 'block'
    },
    formControl: {
      width: '50%'
    },
    plant: {
      margin: theme.spacing(1, 0),
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        right: 30,
        borderRight: '1px solid #cfc7c0',
        top: 0,
        bottom: 0
      }
    }
  })
)
export default function Index() {
  const classes = useStyles();

  const handleChange = (_event: React.ChangeEvent<{}>) => {
    console.log('test');
  };

  const plants = [
    {
      name: {
        scientific: 'Adiantum raddianum Fragrans',
        common: 'Delta Maidenhair Fern'
      }
    },
    {
      name: {
        scientific: '',
        common: 'any'
      }
    }
  ];

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item sm={10}>
          <Typography variant="h3" component="h1" gutterBottom>
            New plant swap
          </Typography>
          <Grid container>
            <Grid item sm={12}>
              <Box>
                <FormControl component="fieldset" className={classes.formControl}>
                  <TextField
                    id="standard-select-currency"
                    label="I am located at"
                    variant="outlined"
                    onChange={handleChange}
                    helperText="Enter your location"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box className={classes.plant}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="I have"
                    variant="outlined"
                    onChange={handleChange}
                    helperText="Select your plant"
                  >
                    {plants.map((plant) => (
                      <MenuItem key={plant.name.common} value={plant.name.common}>
                        {plant.name.common}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
                <Box>
                  <img src="https://www.houseofplants.co.uk/Resources/210temp/Adiantum-raddianum-Fragrans-closeup.jpg" />
                </Box>
              </Box>
            </Grid>
            <Grid item sm={6} alignItems="center">
              <Box className={classes.plant}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Looking to swap for"
                    variant="outlined"
                    onChange={handleChange}
                    helperText="Please select plant to swap for"
                  >
                    {plants.map((plant) => (
                      <MenuItem key={plant.name.common} value={plant.name.common}>
                        {plant.name.common}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
                <Box>
                  <img src="https://www.houseofplants.co.uk/Resources/210temp/Achmeabluerainflower.jpg" />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Button variant="contained" color="primary">Save</Button>
          </Grid>
        </Grid>
      </Grid>
    </Container >
  );
}
