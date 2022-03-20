import React from 'react';
import Queries from '../../Queries/Queries/Queries';
import Speciality from '../../Speciality/Speciality';
import Slider from '../Slider/Slider';

const Home = () => {
      return (
            <div>
                  <Slider></Slider>
                  <Speciality></Speciality>
                  <Queries></Queries>
            </div>
      );
};

export default Home;