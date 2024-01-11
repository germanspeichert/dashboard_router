import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import WindDirectionDisplay from '../components/WindDirectionDisplay';
import WindSpeedDisplay from '../components/WindSpeedDisplay';

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';

const Wind = () => {
  return (
    <>
      <br/>
      <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <WindSpeedDisplay/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <WindDirectionDisplay/>
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
  
export default Wind;

