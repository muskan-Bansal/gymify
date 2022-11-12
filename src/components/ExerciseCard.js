import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({exercise}) =>(
  <Link className="exercise-card text-decoration-none" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <button  className="btn btn-info  btn-lg  text-decration-none rounded-pill">
        {exercise.bodyPart}
      </button>
      <button  className="btn btn-warning mx-3  btn-lg  text-decration-none rounded-pill">
        {exercise.target}
      </button>
      {/* <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button> */}
    </Stack>
    {/* <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography> */}
    <h4 className="text-dark m-2  "  > {exercise.name}</h4>
  </Link>
);

export default ExerciseCard