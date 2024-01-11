import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { Container } from "@mui/material";

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';


const Home = () => {
  return (
    <>
    <br/>

    <Container>
      <Box sx={{ flexGrow: 1, textAlign: 'center'}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Button variant="outlined">
                    <Link to="/temperature">Temperature</Link>
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" size="large">
                    <Link to="/wind">Wind</Link>
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" size="large">
                    <Link to="/radiation">Radiation</Link>
                </Button>
            </Grid>
            {/* <Grid item xs={12}>
                <Button variant="outlined" size="large">
                    <Link to="/all">all</Link>
                </Button>
            </Grid> */}
            <Grid item xs={12}>
                <Button variant="outlined" size="large" color="error">
                    Kill server
                </Button>
            </Grid>
        </Grid>
      </Box>
    </Container>
    <br/>
    </>
  )
};

export default Home;