import React,{useState,useEffect} from 'react'
  import  {Box,Button,Stack,TextField,textField,Typography} from '@mui/material';
  import {exerciseOptions, FetchData} from '../utils/FetchData';
  // import HorizontalScrollBar from './HorizontalScrollBar'
  import Check from './scrollbar'
// const SearchExercises = ({setExercises,bodypart,setBodyPart}) 
const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
   
  // console.log(bodyPart); 
    const [search,setSearch]=useState('');
    const [bodyParts,setBodyParts]=useState([]);

      useEffect(()=>{
        const fetchExercisesData= async ()=>{
          const bodyPartsData=await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
          // bodyPartsData=bodyPartsData.json(); 
          // console.log(bodyPartsData) 
          setBodyParts(['all',...bodyPartsData])
        };

      fetchExercisesData(); 

          //  console.log(bodyParts  );  
        
    },[] );
     
   const handleSearch = async () => {
    if (search) {
      const exercisesData = await FetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

     
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      // window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises); 
    }
  };


  return (
    <>
       <Stack  className="text-center " mt="37px" justifyContent="center" p="20px">
         <Typography  className="" fontWeight={700} sx={{fontSize:{lg:'44px', xs:'30px'}}} >
             Awesome Exercises you <br/>  should know<br/><br/>
         </Typography>

         <Box position="relative" mb="72px "  className="container  ">
            <TextField className="  "sx={{
              input:{fontWeight:'700', border:'none',borderRadius:'4px'},
              width:{lg:'1170px',xs:'350px'},backgroundColor:'#fff',borderRadius:'40px'
            }} height="76px"  placeholder="Search Exercises" value={search} onChange={(e)=>{setSearch(e.target.value.toLowerCase() )}} type="text"/>
      
            <button className="search-btn btn btn-danger  p-3 h-100" 
            sx={{
              bgColor:'#FF2625',
              color:'#fff',
              textTransform:'none',
              width:{lg:'175px',xs:'80px'},fontSize:{lg:'30px',xs:'14px'}
            }}  fontWeight={200} onClick={handleSearch}>Search </button>  
         </Box>
        <Box  sx={{position:'relative' ,width:'100%', p:'20px'}}>
          {/* <Check data={bodyParts} bodyParts setBodyPart={setBodyPart}  />  */}
          <Check data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart}   /> 

      </Box> 
    </Stack> 
    </>
  )
}


export default SearchExercises