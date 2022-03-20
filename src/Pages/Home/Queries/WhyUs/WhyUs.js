import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

const WhyUs = () => {
      return (
            <Box sx={{mt:2}}>
                  <Grid sx={{mb:2}} container >
                        <Grid item xs={12} md={4}>
                              <img src="https://img.freepik.com/free-vector/patient-taking-medical-examination_23-2148856193.jpg?t=st=1647802517~exp=1647803117~hmac=8404fccca9b54438959bf8e612499c1fe6aef9b7b29d2f6df9a2826593a06435&w=740" style={{width:'50%',borderRadius:'50%'}} alt="" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                              <Typography variant="h6" gutterBottom component="div">
                                    Great Infrastructure
                              </Typography>
                              <Typography variant="body2" gutterBottom component="div">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, in.
                              </Typography>
                        </Grid>      
                  </Grid>     
                  <Grid sx={{mb:2}} container >
                        <Grid item xs={12} md={4}>
                              <img src="https://img.freepik.com/free-vector/ambulance-from-different-views_23-2147701186.jpg?w=740&t=st=1647803255~exp=1647803855~hmac=8260ce85ca7c43532614eda3673481e3407c4663b43cc4b146aab3b45b749161" style={{width:'50%',borderRadius:'50%'}} alt="" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                              <Typography variant="h6" gutterBottom component="div">
                              24/7 Ambulance Services
                              </Typography>
                              <Typography variant="body2" gutterBottom component="div">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, in.
                              </Typography>
                        </Grid>      
                  </Grid>     
                  <Grid container >
                        <Grid item xs={12} md={4}>
                              <img src="https://img.freepik.com/free-vector/medical-icons-collection_1172-48.jpg?w=740&t=st=1647803305~exp=1647803905~hmac=ca112d34aa6b7277f298240357bbc3199c1f08a76af17b54544b2802b101acf9" style={{width:'50%',borderRadius:'50%'}} alt="" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                              <Typography variant="h6" gutterBottom component="div">
                              Cutting Edge Technology
                              </Typography>
                              <Typography variant="body2" gutterBottom component="div">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, in.
                              </Typography>
                        </Grid>      
                  </Grid>     
                 
                 
            </Box>
      );
};

export default WhyUs;