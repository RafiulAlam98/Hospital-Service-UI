import React from 'react';
import Queries from '../../Queries/Queries/Queries';
import Tips from '../../Tips/Tips';
import Slider from '../Slider/Slider';

const Home = () => {
      return (
            <div>
                  <Slider></Slider>
                  {/* <Speciality></Speciality> */}
                  <Queries></Queries>
                  <Tips></Tips>
            </div>
      );
};

export default Home;