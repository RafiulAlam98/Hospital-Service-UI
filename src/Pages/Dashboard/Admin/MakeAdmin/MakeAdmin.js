import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

const MakeAdmin = () => {
      const [email,setEmail] = useState('')
      const handleOnBlurEmail = (e) =>{
            setEmail(e.target.value)
      }
      const handleSubmit = (e) =>{
            const data ={
                  email:email
            }
            console.log(data)
            fetch(`https://enigmatic-mountain-73600.herokuapp.com/users/admin/${data?.email}`, {
                  method:'PUT',
                  headers:{
                       'content-type': 'application/json'
                  },
                  body:JSON.stringify(data)
             })
             .then(res=>res.json())
             .then(data => {
                   console.log(data)
                  if(data.modifiedCount === 0){
                       alert('User Added Role as Admin')
                  }
                  else{
                       alert('Bad Request')
                  }
             })
            e.preventDefault()
      }
      return (
            <Container>
                  <Grid container spacing={2}>
                        <Grid  item xs={12} md={6}>
                              <form onSubmit={handleSubmit}>
                                    <TextField
                                    required
                                    size="small"
                                    id="outlined-required"
                                    label="Email"
                                    sx={{ width: '75%', m: 1 }}
                                    onBlur={handleOnBlurEmail}
                                    name="email"
                                    helperText="Email ID"
                                    variant="filled"
                                    />    
                                    <Button
                                          sx={{ width: '50%', mt: 1 }}
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

export default MakeAdmin;