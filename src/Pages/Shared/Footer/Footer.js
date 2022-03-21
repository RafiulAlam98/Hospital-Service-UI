import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import './Footer.css';


const Footer = () => {
      return (
            <>
               <Box sx={{mt:2, backgroundColor:'#0c1226', height:"auto"}}>
                    <Grid container spacing={2}>
                         <Grid  item xs={12} md={3}>
                             
                         </Grid>
                         <Grid  item xs={12} md={3}>
                             
                         </Grid>
                         <Grid  item xs={12} md={3}>
                             
                         </Grid>
                         <Grid  item xs={12} md={3}>
                             
                         </Grid>
                         <Typography >
                              <span>
                                   <i className="far fa-copyright"></i>
                              </span>
                              M.Rafiul Alam
                         </Typography>
                    </Grid>
                    
                         
               </Box>   
            </>
      );
};

export default Footer;