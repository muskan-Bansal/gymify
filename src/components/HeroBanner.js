import React from 'react';
import {Box,Stack,Typography} from '@mui/material';
// import bannerimg from '../assets/images/banner.png';
const HeroBanner = () => {
  return (<>
    {/* <div className="container"> 
    <div className="row">
    <div className="col"> */}
          
    <Box sx={{mt:{lg:'212px',xs:'70px'},
              ml:{sm:'50px',}}}  position="relative" p="20px"  > 
              <div>
       <Typography color="#FF2625" fontWeight="600" fontSize="26px"> Fitness club  </Typography>
       <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}}>
          Sweat,Smile<br/> and Repeat
       </Typography>
       <Typography fontSize="22px" fontFamily="Alereya" lineHeight="35px">
          Check out the most effective exercises 
       </Typography>
       <Stack>
         <button variant="contained" href="#exercises"  className="btn btn-danger  w-50 rounded">Explore Exercises</button>
       </Stack>
       <Typography fontWeight={600}   className="text-danger d-md-block d-none " sx={{opacity:'0.1' ,
      fontSize:'200px'}}>
          Exercise
       </Typography></div>
     <div> 
      {/* <img src={bannerimg} alt="banner" className="hero-banner-img"  /> */}
      </div>
    </Box> 
    
    </>

  )
}

export default HeroBanner