import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React from 'react';


const Doctor = ({doctors}) => {
      return (
            <>
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 450 }} aria-label="simple table">
                    <TableHead>
                         <TableRow>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                   SI.No.
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                   Name
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                   Degree
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                   Designation
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                   Institution
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                   Clinical Specialist
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                  Serial Day
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                  Contact No.
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: 'tomato', fontWeight:600 }}
                                   variant="body1"
                                   gutterBottom
                                   component="div"
                              >
                                  Status
                              </Typography>
                         </TableCell>
                         
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {doctors.map((doctor,index) => (
                         <TableRow
                         key={doctor.name}
                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                         >
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: '#04AA6D', fontWeight:400 }}
                                   variant="body2"
                                   gutterBottom
                                   component="div"
                              >
                                   {index+1}
                              </Typography>
                         </TableCell>
                         <TableCell align="center">
                              <Typography
                                   sx={{ color: '#04AA6D', fontWeight:400 }}
                                   variant="body2"
                                   gutterBottom
                                   component="div"
                              >
                                   {doctor.name}
                              </Typography>
                         </TableCell>
                        <TableCell align="center">
                              <Typography
                                    sx={{ color: '#04AA6D', fontWeight:400 }}
                                    variant="body2"
                                    gutterBottom
                                    component="div"
                                    >
                                    {doctor.degree}
                              </Typography>
                        </TableCell>
                        <TableCell align="center">
                              <Typography
                                    sx={{ color: '#04AA6D', fontWeight:400 }}
                                    variant="body2"
                                    gutterBottom
                                    component="div"
                                    >
                                    {doctor.designation}
                              </Typography>
                        </TableCell>
                        <TableCell align="center">
                              <Typography
                                    sx={{ color: '#04AA6D', fontWeight:400 }}
                                    variant="body2"
                                    gutterBottom
                                    component="div"
                                    >
                                    {doctor.institution}
                              </Typography>
                        </TableCell>
                        <TableCell align="center">
                              <Typography
                                    sx={{ color: '#04AA6D', fontWeight:400 }}
                                    variant="body2"
                                    gutterBottom
                                    component="div"
                                    >
                                    {doctor.specialist}
                              </Typography>
                        </TableCell>
                        <TableCell align="center">
                              <Typography
                                    sx={{ color: '#04AA6D', fontWeight:400 }}
                                    variant="body2"
                                    gutterBottom
                                    component="div"
                                    >
                                    {doctor.serial}
                              </Typography>
                        </TableCell>
                        <TableCell align="center">
                              <Typography
                                    sx={{ color: '#04AA6D', fontWeight:400 }}
                                    variant="body2"
                                    gutterBottom
                                    component="div"
                                    >
                                    {doctor.contact}
                              </Typography>
                        </TableCell>
                        <TableCell align="center">
                              <Typography
                                    sx={{ color: '#04AA6D', fontWeight:400 }}
                                    variant="body2"
                                    gutterBottom
                                    component="div"
                                    >
                                    {doctor.status}
                              </Typography>
                        </TableCell>
                         </TableRow>
                         ))}
                    </TableBody>
                    </Table>
               </TableContainer>
            </>
      );
};

export default Doctor;