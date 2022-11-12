import React,{useState} from 'react';
import {Box} from '@mui/material';
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import bannerimg from '../assets/images/banner.png';

 const Home = () => { 
    const [bodyPart,setBodyPart ]=useState('all');
    const [exercises,setExercises ]=useState([]);
    console.log(exercises)
    console.log(46345304)
     
  return (
  <> 
    <Box>
          <div className="d-md-flex   ">
        <HeroBanner/>
       <img src={bannerimg} alt="banner" className="hero-banner-img  img-fluid  w-50 h-50"   />
         </div>

        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}  />
        
        
        <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
    </Box>
  </>
  ) 
}
export default Home