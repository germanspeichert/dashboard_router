import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import TemperatureDisplay from '../components/TemperatureDisplay';
import TemperatureChart from '../components/TemperatureChart';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';

const Temperature = () => {
  return (
    <>
      <br/>
      <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <TemperatureDisplay></TemperatureDisplay>
          </Grid>
          <Grid item xs={12} sm={7}>
            <TemperatureChart></TemperatureChart>
          </Grid>
        </Grid>
      </Box>
      </Container>

      <br/>
      <Container sx={{ textAlign: 'center' }}>
      <Button variant="outlined" size="large">
        <Link to="/">Home</Link>
      </Button>
      </Container>
      <br/>
    </>
  )
};
  
export default Temperature;