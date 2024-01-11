import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import RadiationDisplay from "../components/RadiationDisplay";
import RadiationChart from "../components/RadiationChart";

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';

const Radiation = () => {
  return (
    <>
      <br/>
      <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <RadiationDisplay/>
          </Grid>
          <Grid item xs={12} sm={7}>
            <RadiationChart/>
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
  
export default Radiation;