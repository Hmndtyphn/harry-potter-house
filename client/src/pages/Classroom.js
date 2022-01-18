import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_CLASSES } from '../utils/queries';

import { Link, useParams } from 'react-router-dom';

import Quiz from '../components/Quiz';
import Start from '../components/Start';
import Result from '../components/Result';

// Where we take the quizzes
// Import props from global state
// Quiz total, points to add to house score

const Classroom = () => {
  // grab name from params
  const { name } = useParams();

  // use useQuery(Apollo) to make query request
  const { loading, data } = useQuery(QUERY_ALL_CLASSES, {
    variables: { name }
  });

  console.log('classroom.js >> line 24 >> class data:', data)

  return (
    <div>
      <Start />
    </div>
  )
};

export default Classroom;

