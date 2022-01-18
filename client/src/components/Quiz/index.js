import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Result from "../Result";
import images from "../../assets/images/snape_4.jpeg";
// import coverPhoto2 from "../../assets/";
import { useQuery } from "@apollo/client";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { QUERY_CLASS } from "../../utils/queries";
import potionsImage from "../../assets/images/potionsclass.jpeg";

// Background pic of class
// Start button to start quiz/Link to Quiz component/
// --render Quiz component
// Take Quiz, get results and summary
// -- render Result component
// Redirect to Great Hall when Quiz is complete
const userAnswers = [];
const correctAnswers = [];

const Quiz = () => {
  const { name } = useParams();

  const { loading, data } = useQuery(QUERY_CLASS, {
    variables: { name },
  });

  const subject = data?.subject || {};
  const { questions, image, professor } = subject;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // empty array to hold randomized quiz questions
  const quizQuestions = [];

  // shuffle function so every quiz is not the same
  function shuffle(array) {
    return Math.floor(Math.random() * array.length);
  }

  // start quiz as soon as user hits link
  function generateQuiz() {
    // push a random question as long as the length of the array is less than 5
    while (quizQuestions.length < 5) {
      const randomQuestion = shuffle(questions);
      quizQuestions.push(questions[randomQuestion]);

      correctAnswers.push(questions[randomQuestion].isCorrect)
    }

    console.log("Quiz >> index.js >> line 62 >> randomize questions:", quizQuestions)
    console.log("Quiz >> index.js >. line 63 >> correct answers:", correctAnswers)
  }

  // set next question
  function handleChange(event) {
    event.preventDefault();

    // push answer to array
    userAnswers.push(event.target.value);

    // set next question
    setCurrentQuestion(currentQuestion + 1);
    
    console.log(userAnswers);
  }

  generateQuiz();

  const questionCard = (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" sx={{ py: 3 }}>
          {quizQuestions[currentQuestion].question}
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl>
          <RadioGroup
            aria-label="answers"
            name="answer-buttons"
            value={currentQuestion}
            sx={{ pb: 3, pl: 2 }}
            onChange={handleChange}
          >
            {quizQuestions[currentQuestion].answerOptions.map((answer) => (
              <FormControlLabel
                key={`${answer}`}
                value={`${answer}`}
                control={<Radio />}
                label={`${answer}`}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </CardActions>
    </Card>
  );

  const BackgroundDiv = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${potionsImage})`,
    backgroundSize: "cover",
    height: "100vh",
    color: 'white'
  }));

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BackgroundDiv sx={{ px: -100, pt: 0, pb: 15 }}>
      <Typography
        className="title"
        variant="h2"
        align="center"
        sx={{ py: 10 }}
        gutterBottom
      >
        {capitalizeFirstLetter(name)} Quiz
      </Typography>

      <Grid
        container
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex" }}
        alignItems="center"
      >
        <Grid item xs align="center">
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

        <Grid item xs={6} align="center">
          <Container className="background">{questionCard}</Container>
        </Grid>
      </Grid>
    </BackgroundDiv>
  );
};

export default Quiz;
