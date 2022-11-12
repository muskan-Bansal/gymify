import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';


import { exerciseOptions, FetchData  ,youtubeOptions } from '../utils/FetchData'; 

import Details from '../components/Details'
import ExercisesVideos from '../components/ExercisesVideos'
import SimilarExercises from '../components/SimilarExercises'
const ExerciseDetail = () => {
  
  const [exerciseDetail, setExerciseDetail] = useState({}); 
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]); 
  const [equipmentExercises, setEquipmentExercises] = useState([]);
   const { id } = useParams(); 

    
   useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
      
      const fetchExercisesData=async()=>{

          const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
          const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

          const exerciseDetailData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);  
       setExerciseDetail(exerciseDetailData); 

         const exerciseVideosData = await FetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
//   console.log(exerciseVideosData)
       const targetMuscleExercisesData = await FetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

 
      const equimentExercisesData = await FetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
        
// console.log(equimentExercisesData)
// console.log(89)
 
      };
      fetchExercisesData();
      //  console.log(587845)
      

   },[id]); 
// console.log(6767)

  if (!exerciseDetail) return <div>No Data</div>;

  return (
   <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Details exerciseDetail={exerciseDetail} />
      <ExercisesVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      {/* <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />  */}
    </Box>
    
  )
}

export default ExerciseDetail