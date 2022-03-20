import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
      {
        
        imgPath:
          'https://media.istockphoto.com/photos/digitally-rendered-image-of-an-empty-hospital-intensive-care-unit-picture-id1282880747?b=1&k=20&m=1282880747&s=170667a&w=0&h=owlFXH9Nx0CerruK9WH2lDRBLDrJLNCxxB6fKTK1oA8=',
      },
      {
        
        imgPath:
          'https://media.istockphoto.com/photos/male-doctors-wear-medical-gloves-holding-touching-hands-man-patient-picture-id1331029757?b=1&k=20&m=1331029757&s=170667a&w=0&h=8vkwkg_zuiyGZ_N9xiBJH734LgwFrSIGCM4OznydX1E=',
      },
      {
        
        imgPath:
          'https://media.istockphoto.com/photos/asian-chinese-female-doctor-explaining-medical-report-to-a-female-at-picture-id1319540429?b=1&k=20&m=1319540429&s=170667a&w=0&h=OGfTbeeU2quDbCZ2bhRTdSII4YLknxjnSqL_GE9723I=',
      },
      {
        
        imgPath:
          'https://media.istockphoto.com/photos/empty-luxury-modern-hospital-room-picture-id1298375809?b=1&k=20&m=1298375809&s=170667a&w=0&h=q0Pf0nTHR17Y8BcyS8pzfqWLa_HGwthP9qXvRMjanxg=',
      },
      {
        
        imgPath:
          'https://media.istockphoto.com/photos/modern-empty-temporary-intensive-care-emergency-room-is-ready-to-picture-id1295301481?b=1&k=20&m=1295301481&s=170667a&w=0&h=2W-5mbvRju-L4DE-fzGlhHRWhX5fS72MjUcVwj0_jvg=',
      },
      {
        
        imgPath:
          'https://media.istockphoto.com/photos/photo-of-newborn-baby-feet-picture-id1167978175?b=1&k=20&m=1167978175&s=170667a&w=0&h=32QV8HVAxGjgWKQp0s-TElIkoW1WVx7Vo7eR-LfT3U8=',
      },
    ];

const Slider = () => {
      const theme = useTheme();
      const [activeStep, setActiveStep] = React.useState(0);

      const handleStepChange = (step) => {
        setActiveStep(step);
      };
    
      return (
            <Box sx={{   }}>
            
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 500,
                        display: 'block',
                       
                        overflow: 'hidden',
                        width: '100%',
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            
          </Box>
      );
};

export default Slider;