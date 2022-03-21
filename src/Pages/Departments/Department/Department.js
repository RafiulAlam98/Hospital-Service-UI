import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const Department = ({department}) => {
      
      return (
            <>
                  <Grid item xs={12} md={4}>
                  <Paper sx={{ mt:2, py: 2, textAlign: 'center' }} elevation={4}>
                        <Typography
                              sx={{ color: 'info.main' }}
                              variant="body1"
                              gutterBottom
                              component="div"
                        >
                             Department- {department.name}
                        </Typography>
                        <Typography
                              sx={{  }}
                              variant="body1"
                              gutterBottom
                              component="div"
                        >
                             Doctor- {department.doctor}
                        </Typography>
                        <Typography
                              sx={{  }}
                              variant="body1"
                              gutterBottom
                              component="div"
                        >
                             Time- {department.time}
                        </Typography>
                        <Typography
                              sx={{  }}
                              variant="body1"
                              gutterBottom
                              component="div"
                        >
                             Available- {department.space}
                        </Typography>
                        <Button
                              sx={{ width: '50%', mt: 1 }}
                              variant="contained"
                              type="submit"
                              size="small"
                              >
                              <Link to={`/appointments/${department?._id}`} style={{textDecoration:'none', color:"white"}} >Booking</Link>
                        </Button>
                        </Paper>
                  </Grid>
                  
            </>
      );
};

export default Department;