import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid, Box, FormControl, FormControlLabel, RadioGroup, Radio } from "@mui/material";
import Result from "../Result";
import images from "../../assets/images/snape_2.jpeg";
// import coverPhoto2 from "../../assets/";
import { useQuery } from "@apollo/client";
import { QUERY_CLASS } from "../../utils/queries";

// Background pic of class
// Start button to start quiz/Link to Quiz component/
// --render Quiz component
// Take Quiz, get results and summary
// -- render Result component
// Redirect to Great Hall when Quiz is complete

const Quiz = () => {
  const { name } = useParams();

  const { loading, data } = useQuery(QUERY_CLASS, {
    variables: { name },
  });

  const subject = data?.subject || {};
  const { questions, image, professor } = subject;
  console.log("index.js >> Quiz >> line 26 >> questions ==>", questions);
  const [currentQuestion, setCurrentQuestion] = useState(0)

  // shuffle function so every quiz is not the same
  function shuffle(array) {
    return Math.floor(Math.random() * array.length);
  }

  // start quiz as soon as user hits link
  function generateQuestions() {

    // empty array to hold randomized quiz questions
    const quizQuestions = [];

    // push a random question as long as the length of the array is less than 5
    while (quizQuestions.length < 5) {
      const randomQuestion = shuffle(questions);
      quizQuestions.push(questions[randomQuestion]);
    }

    console.log("Quiz >> index.js >> line 46 >> randomized questions:", quizQuestions)
    // maybe add state to control form
    return (
      <Container>
        <Typography variant="h5" sx={{py: 5}}>
          {quizQuestions[currentQuestion].question}
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="answers"
            name="answer-buttons">
              {quizQuestions[currentQuestion].answerOptions.map((answer) => (
                <FormControlLabel value={`${answer}`} control={<Radio />} label={`${answer}`}/>
              ))}
            </RadioGroup>
        </FormControl>
      </Container>
    )

  }

  // generateQuestions();
  // clear out component holding question, then set next question
  // function setNextQuestion() {
    // find the way to clear the div or component
    // add next question 
    // Thats it! :)  

  // }

  // set empty array for user answers to pass to results component to grade

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ px: -100, pt: 0, pb: 15 }}>
      <Typography
        className="title"
        variant="h1"
        component="h1"
        align="center"
        sx={{ pt: 10 }}
        gutterBottom
      >
        {name} Quiz
      </Typography>
      
      <Grid
        container
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex" }}
        alignItems="center"
      >
        <Grid item xs align='center'>
          {/* images */}
          <Container>
            <img
              src={images}
              style={{ height: "25rem", width: "25rem" }}
              align="center"
              alt="Professor Snape"
            />
          </Container>
        </Grid>

        <Grid item xs={5} align='center'>
          <Container className="background">{generateQuestions()}</Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Quiz;
