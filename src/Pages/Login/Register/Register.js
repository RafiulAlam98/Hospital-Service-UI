import GoogleIcon from '@mui/icons-material/Google';
import { CircularProgress, Container, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth/useAuth';

const Register = () => {
      const [loginData, setLoginData] = useState({});
      const history = useHistory();
      const location = useLocation();
      const {authError,registerUser,isLoading,googleSignIn} = useAuth()
 
      const handleOnBlur = e => {
           const field = e.target.name;
           const value = e.target.value;
           const newLoginData = { ...loginData };
           newLoginData[field] = value;
           setLoginData(newLoginData);
         };
         
          const handleGoogleLogin = (e) => {
                  googleSignIn(location, history).then(result => {
                  e.preventDefault();
               });
          };
       
         const handleSubmit = e => {
               console.log(loginData.name, loginData.email, loginData.password)
               registerUser(loginData.name, loginData.email, loginData.password, history)
               e.preventDefault();
         };
         
          if(isLoading){
               return <CircularProgress></CircularProgress>
          }
 
      
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
                                   Please Register
                              </Typography>
                              <TextField
                                   required
                                   size="small"
                                   id="outlined-required"
                                   label="name"
                                   sx={{ width: '75%', m: 1 }}
                                   onBlur={handleOnBlur}
                                   name="name"
                                   helperText="Name"
                                   variant="filled"
                              />
                              <TextField
                                   required
                                   size="small"
                                   id="outlined-required"
                                   label="email"
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
                                   label="password"
                                   type="password"
                                   name="password"
                                   onBlur={handleOnBlur}
                                   autoComplete="current-password"
                                   sx={{ width: '75%', m: 1 }}
                                   helperText="Password"
                                   variant="filled"
                              />
                              <Button
                                   sx={{ width: '50%', mt: 1 }}
                                   variant="contained"
                                   type="submit"
                                   size="small"
                              >
                                   Register
                              </Button>
                      </form>
                              <Button
                                    onClick={handleGoogleLogin}
                                    sx={{ width: '50%',mt:1 }}
                                    variant="contained"
                                    type="submit"
                                    size="small"
                              >
                                    <GoogleIcon sx={{mr:1}} fontSize='small'></GoogleIcon>
                                    Log in with Google
                              </Button>    
                              <Typography
                                   sx={{ textAlign: 'center',mt:1 }}
                                   color="RGB(155, 35, 53)"
                                   variant="body2"
                                   gutterBottom
                              >
                                  <Link style={{textDecoration:'none'}} to='/login'>
                                        Already register? log In here
                                  </Link>
                              </Typography>

                              {
                                   authError && <Alert severity="error">{authError}</Alert>
                              }
                 </Grid>
                 
                               
                 
            </Grid>
            
           
       </Container>  
      );
};

export default Register;