import { CircularProgress, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth/useAuth';



const Appointments = () => { 
      const {user} = useAuth()
      let date = new Date().toLocaleDateString();
      const params = useParams();
      console.log(params.id)
      const [phone,setPhone] = useState('')
      const [patient,setPatient] = useState('')
      const [departments, setDepartments] = useState([])
      const [loading,setLoading] = useState(false)
      const [acknoledgement, setAcknowledgement] = useState('')
      
      useEffect(()=>{
            setLoading(true)
            fetch('https://enigmatic-mountain-73600.herokuapp.com/departments')
            .then(res => res.json())
            .then(data =>{
                  setLoading(true)
                  console.log(data)
                  setDepartments(data)
                  setLoading(false)
            })
      },[])

      const appointments = departments.filter(department => department?._id === params?.id)
      const appointmentData = appointments[0]
      
      
      

      const handleOnBlurPhone = (e) =>{
        setPhone(e.target.value)
      }
      
      const handleOnBlurPatient=(e) =>{
        setPatient(e.target.value)
      }

      if(loading){
            return <CircularProgress></CircularProgress>
      }


      const handleSubmit = (e) =>{
            const appointment = {
                  ...appointmentData,
                  date:date,
                  email:user?.email,
                  associate:user?.displayName, 
                  phone:phone,
                  patient:patient,
                  status:"pending"
            }
            console.log(appointment)
            fetch(`https://enigmatic-mountain-73600.herokuapp.com/appointments`, {
                  method: 'POST',
                  headers: {
                       'content-type': 'application/json',   
                  },
                  body: JSON.stringify(appointment),
                  })
                  .then(res => res.json())
                  .then(info => {
                       console.log(info?.insertedId);
                       setAcknowledgement(info?.insertedId)
                  });

            
            e.preventDefault();
      }
      
      
      return (
            <>
               <Grid container spacing={2}>
                        <Grid sx={{ width: '100%', mt: 10 }} item xs={12} md={6}>
                              <form onSubmit={handleSubmit}>
                              <Typography
                                   sx={{ textAlign: 'center' }}
                                   color="RGB(155, 35, 53)"
                                   variant="h5"
                                   gutterBottom
                              >
                                   Get Appointment
                              </Typography>
                              <TextField
                                   required
                                   size="small"
                                   id="outlined-required"
                                   label="your phone"
                                   name="phone"
                                   onBlur={handleOnBlurPhone}
                                   sx={{ width: '75%', m: 1 }}
                                   variant="filled"
                              />
                              <TextField
                                   required
                                   size="small"
                                   id="outlined-required"
                                   label="number of Patient"
                                   name="patient"
                                   onBlur={handleOnBlurPatient}
                                   sx={{ width: '75%', m: 1 }}
                                   variant="filled"
                              />
                              <TextField
                                    disabled
                                    required
                                    size="small"
                                    id="outlined-required"
                                    label="status"
                                    name="status"
                                    defaultValue="pending"
                                    sx={{ width: '75%', m: 1 }}
                                    variant="filled"
                              />
                              
                              <Button
                                   sx={{ width: '25%', m: 5 }}
                                   variant="contained"
                                   type="submit"
                                   size="small"
                              >
                                   Submit
                              </Button>
                         </form>

                         {
                              acknoledgement && <Alert severity="success">Appointment Booked Successfully</Alert>
                         }
                     </Grid>
                 
                  {/* <Grid item xs={12} md={6}>
                        <Calender></Calender>
                  </Grid>    */}

               </Grid>   
            </>
      );
};

export default Appointments;