import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CLASS } from '../utils/queries';
import  potionsImage from '../assets/images/potionsclass.jpeg';

import { Link, useParams } from 'react-router-dom';

import { Button } from '@mui/material'

import Quiz from '../components/Quiz';
import Result from '../components/Result';

// Where we take the quizzes
// Import props from global state
// Quiz total, points to add to house score

const Classroom = () => {
  // grab name from params
  const { name } = useParams();

  // use useQuery(Apollo) to make query request
  const { loading, data } = useQuery(QUERY_CLASS, {
    variables: { name }
  });

  console.log('classroom.js >> line 24 >> class data:', data.subject)
  // const { description, image, name, professor, questions } = data.subject
  
  const styledDiv={
    backgroundImage: `url(${potionsImage})`,
    height:'100vh'
  }

  return (
    <div style={styledDiv}>
    Take out your text and prepare to start your quiz.
      Start Quiz
    </div>
  )
};

export default Classroom;

