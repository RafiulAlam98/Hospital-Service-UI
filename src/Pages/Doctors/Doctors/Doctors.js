import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from './../Doctor/Doctor';

const Doctors = () => {
      const [doctors,setDoctorts] = useState([])
      const [loading,setLoading] = useState(false)
      useEffect(()=>{
            setLoading(true)
            fetch("https://hospital-web-server.vercel.app/doctors")
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                setDoctorts(data.reverse());
                setLoading(false);
              });
      },[])
      if(loading){
            return <CircularProgress></CircularProgress>
       }
      return (
            <>
                  <Doctor doctors={doctors}></Doctor>
            </>
      );
};

export default Doctors;