import React from 'react';

import { Link, useParams } from 'react-router-dom';

import Quiz from '../components/Quiz';
import Start from '../components/Start';
import Result from '../components/Result';


// 
// Where we take the quizzes
// Import props from global state
// Quiz total, points to add to house score


const Classroom = (props) => {
  const { subjectName } = useParams();

  return (
    <div>
      <Start />
    </div>
  )
};

export default Classroom;

