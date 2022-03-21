import { CircularProgress, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import AppointmentAll from '../AppointmentAll/AppointmentAll';

const AppointmentsAll = () => {
      const [allApps,setAllApps] = useState([])
      const [loading,setLoading] = useState(false)
      useEffect(()=>{
            setLoading(true)
            fetch('https://enigmatic-mountain-73600.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data =>{
                  console.log(data)
                  setAllApps(data)
                  setLoading(false)
            })
      },[])
      if(loading){
            return <CircularProgress></CircularProgress>
       }
      return (
            <Container>
                  <Grid container spacing={2}>
                        {
                              allApps.map(app =><AppointmentAll app={app}></AppointmentAll>)  
                        }
                       
                  </Grid>
            </Container>
      );
};

export default AppointmentsAll;