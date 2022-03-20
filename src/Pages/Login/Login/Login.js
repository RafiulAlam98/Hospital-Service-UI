import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth/useAuth';

const Login = () => {
      const [loginData, setLoginData] = useState({});
      const {authError,signInUser} = useAuth()
      const history = useHistory();
      const location = useLocation();
 
      const handleOnBlur = e => {
           const field = e.target.name;
           const value = e.target.value;
           const newLoginData = { ...loginData };
           newLoginData[field] = value;
           console.log(newLoginData);
           setLoginData(newLoginData);
         };
       
         const handleSubmit = e => {
            console.log(loginData.email, loginData.password)
            signInUser(loginData.email, loginData.password, location, history)
            e.preventDefault();
         };
 
        
      return (
            <Container>
                    
            <Grid container spacing={2}>
                 <Grid sx={{ width: '100%', mt: 10 }} item xs={12} md={6}>
                      <form onSubmit={handleSubmit}>
                           <Typography
                                sx={{ textAlign: 'center' }}
                                color="RGB(155, 35, 53)"
                                variant="body1"
                                gutterBottom
                           >
                                Please Login
                           </Typography>
                           <TextField
                                required
                                size="small"
                                id="outlined-required"
                                label="Email"
                                sx={{ width: '75%', m: 1 }}
                                onBlur={handleOnBlur}
                                name="email"
                                helperText="Email ID"
                                variant="filled"
                           />
                           <TextField
                                required
                                size="small"
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                sx={{ width: '75%', m: 1 }}
                                helperText="Password"
                                variant="filled"
                           />
                           <Button
                                sx={{ width: '50%', m: 2 }}
                                variant="contained"
                                type="submit"
                                size="small"
                           >
                                Login
                           </Button>
                      </form>
                     
                 </Grid>
                 
                        
                 
            </Grid>
            
           
       </Container>  
      );
};

export default Login;