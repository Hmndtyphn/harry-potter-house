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
  const { name: subject } = useParams();

  // use useQuery(Apollo) to make query request
  const { loading, data } = useQuery(QUERY_CLASS, {
    variables: { name: subject }
  });

  const { description, image, name, professor, questions } = data.subject
  
  const styledDiv={
    backgroundImage: `url(${image})`,
    height:'100vh'
  }

  console.log('classroom.js >> line 24 >> class data:', data)

  return (
    <div style={styledDiv}>
      Welcome to {`${name}`} with {`${professor}`}. Take out your text and prepare to start your quiz.
      <Button>
      Start Quiz
      </Button>
    </div>
  )
};

export default Classroom;

