import React, { useEffect, useState } from "react";
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
// const userAnswers = [];
// const correctAnswers = [];

const Quiz = () => {
  const { name } = useParams();

  const { loading, data } = useQuery(QUERY_CLASS, {
    variables: { name },
  });
   


  // const subject = data?.subject || {};
  // const { questions, image, professor } = subject;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(null);
  const [endQuiz, setEndQuiz] = useState(false);

  useEffect(async() => {
    if (data && data.subject && !questions) {
      // const useQuestions = await fiveQuestions(data.subject.questions)

      let sliced = data.subject.questions.slice(0,4)
      setQuestions(sliced)
      console.log(questions)
    }
  }, [data, questions, setQuestions])

  useEffect(() => {
    if (currentQuestion === 4) {
      setEndQuiz(true)
    }
  }, [currentQuestion, endQuiz]);

  // set next question
  function handleChange(event) {
    event.preventDefault();

    const answer = questions[currentQuestion].isCorrect
    if (answer === event.target.value) {
      setScore(score + 2)
    } else {
      setScore(score - 1)
    }
    // set next question
    setCurrentQuestion(currentQuestion + 1);
    console.log(score);
    // console.log(userAnswers);
  }

  const questionCard = (
    <Card variant="outlined">
      <CardContent>
        {questions && questions[currentQuestion] && questions[currentQuestion].question ? <Typography variant="h5" sx={{ py: 3 }}>
          {questions[currentQuestion].question}
        </Typography> : <div>Loading</div>}
      </CardContent>
      <CardActions>
        <FormControl>
          {questions && questions[currentQuestion] && questions[currentQuestion].question ? <RadioGroup
            aria-label="answers"
            name="answer-buttons"
            value={currentQuestion}
            sx={{ pb: 3, pl: 2 }}
            onChange={handleChange}
          >
            {questions[currentQuestion].answerOptions.map((answer) => (
              <FormControlLabel
                key={`${answer}`}
                value={`${answer}`}
                control={<Radio />}
                label={`${answer}`}
              />
            ))}
          </RadioGroup> : <div>Loading</div>}
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

        {!endQuiz ? <Grid item xs={6} align="center">
          {questions ? <Container className="background">{questionCard}</Container> : <div>Loading</div>}
        </Grid> : <Grid item xs={6} align="center">{`Here is your score for the quiz: ${score}`}</Grid>}
      </Grid>
    </BackgroundDiv>
  );
};

export default Quiz;
