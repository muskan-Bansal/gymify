import React from 'react'
import {Stack,Typography} from '@mui/material';
import icon from'../assets/icons/gym.png';
const BodyPart = ({item,setBodyPart,bodyPart}) => {
  console.log(bodyPart);
  return (
     <Stack type="button" alignItems="center" justifyContent="center" className="bodyPart-card" 
     sx={{
        borderTop: bodyPart==item? '4px solid #FF2625m ': '',
       background:'#fff',borderBottomRadius:'20px',width:'270px', height:'282px',cursor:'pointer',gap:'47px' 
      }}
       onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      // console.log(item)
    }}
      > 
      <img src={icon} alt="dumbell" style={{width:'40px',height:'40px'}} /> 
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
 
     </Stack>
    
    
  )
}

export default BodyPart