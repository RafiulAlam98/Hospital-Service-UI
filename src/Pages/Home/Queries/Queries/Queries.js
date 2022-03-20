import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import FaqS from '../FaqS/FaqS';
import WhyUs from '../WhyUs/WhyUs';

const Queries = () => {
      return (
            <Container>
                  <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                              <FaqS></FaqS>   
                        </Grid>
                        <Grid item xs={12} md={6}>
                              <WhyUs></WhyUs>
                        </Grid>      
                  </Grid>     
            </Container>
      );
};

export default Queries;