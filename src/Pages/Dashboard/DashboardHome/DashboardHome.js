import React from 'react';
import useAuth from './../../../hooks/useAuth/useAuth';
import Admin from './../Admin/Admin/Admin';

const DashboardHome = () => {
      const {admin} = useAuth()
      console.log(admin)
      return (
            <>
                  <Admin></Admin>
                  {/* {
                        admin?
                        <Admin></Admin>
                  :
                        <User></User>  
                  }    */}
            </>
      );
};

export default DashboardHome;