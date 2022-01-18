import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid, Box, FormControl, FormControlLabel, RadioGroup, Radio, Card, CardActions, CardContent } from "@mui/material";
import { styled } from '@mui/material/styles';
import Result from "../Result";
import images from "../../assets/images/snape_2.jpeg";
// import coverPhoto2 from "../../assets/";
import { useQuery } from "@apollo/client";
import { QUERY_CLASS } from "../../utils/queries";
import potionsImage from "../../assets/images/potionsclass.jpeg";

// Background pic of class
// Start button to start quiz/Link to Quiz component/
// --render Quiz component
// Take Quiz, get results and summary
// -- render Result component
// Redirect to Great Hall when Quiz is complete
const userAnswers = [];

const Quiz = () => {
  const { name } = useParams();

  const { loading, data } = useQuery(QUERY_CLASS, {
    variables: { name },
  });

  const subject = data?.subject || {};
  const { questions, image, professor } = subject;
  console.log("index.js >> Quiz >> line 26 >> questions ==>", questions);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  // empty array to hold randomized quiz questions
  const quizQuestions = [];
  // empty array to hold user answers
  

  const BackgroundDiv = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${potionsImage})`,
    backgroundSize: 'cover',
    height: "100vh",
    color: "white"
  }))

  // shuffle function so every quiz is not the same
  function shuffle(array) {
    return Math.floor(Math.random() * array.length);
  }

  // set next question
  function handleChange(event) {
    event.preventDefault();

    // push answer to array
    userAnswers.push(event.target.value)

    // set next question 
    setCurrentQuestion(currentQuestion + 1)
    // quizQuestions[]
    console.log(userAnswers)
    
  }

  // start quiz as soon as user hits link
  function generateQuestions() {

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
        <FormControl>
          <RadioGroup
            aria-label="answers"
            name="answer-buttons"
            value={currentQuestion}
            onChange={handleChange}>
              {quizQuestions[currentQuestion].answerOptions.map((answer) => (
                <FormControlLabel key={`${answer}`} value={`${answer}`} control={<Radio />} label={`${answer}`}/>
              ))}
            </RadioGroup>
        </FormControl>
      </Container>
    )

  }


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BackgroundDiv sx={{ px: -100, pt: 0, pb: 15 }}>
      <Typography
        className="title"
        variant="h2"
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
    </BackgroundDiv>
  );
};

export default Quiz;
