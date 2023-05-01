import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';

const AppointmentAll = (props) => {
      const {_id,name,doctor,associate,patient,phone,time,status} = props.app
      
      console.log(_id)
      const handleDelete = () => {
        console.log(_id);
        const proceed = window.confirm(
          "Are You sure to remove this appointment?"
        );
        if (proceed) {
          fetch(`https://hospital-web-server.vercel.app/appointments/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                alert("deleted successfully");
              }
            });
        }
      };

      const handleUpdate = (id) => {
        fetch(`https://hospital-web-server.vercel.app/appointments/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(props),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              alert("User Updated Successfully");
            }
            console.log(data);
          });
      };

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
                              Department - {name}
                        </Typography>
                        <Typography
                              sx={{  }}
                              variant="body1"
                              gutterBottom
                              component="div"
                        >
                             Doctor - {doctor}
                        </Typography>
                        
                        <Typography
                              sx={{  }}
                              variant="body1"
                              gutterBottom
                              component="div"
                        >
                             Associate - {associate}
                        </Typography>
                        <Typography
                              sx={{  }}
                              variant="body1"
                              gutterBottom
                              component="div"
                        >
                             Person - {patient}
                        </Typography>
                        <Typography
                              sx={{  }}
                              variant="body1"
                              gutterBottom
                              component="div"
                        >
                             Contact - {phone}
                        </Typography>
                        <Typography
                              sx={{  }}
                              variant="body1"
                              gutterBottom
                              component="div"
                        >
                             Time : {time}
                        </Typography>
                        <Typography
                              sx={{  }}
                              variant="body1"
                              gutterBottom
                              component="div"
                        >
                             Status : {status}
                        </Typography>
                        
                              <Button
                                    onClick={handleUpdate}
                                    sx={{ width: '25%', m: 1 }}
                                    variant="contained"
                                    type="submit"
                                    size="small"
                                    >
                                   Update 
                              </Button>
                              <Button
                                    onClick={handleDelete}
                                    sx={{ width: '25%', m: 1 }}
                                    variant="contained"
                                    type="submit"
                                    size="small"
                                    >
                                  Delete  
                              </Button>
                        </Paper>
                  </Grid>
            </>
      );
};

export default AppointmentAll;