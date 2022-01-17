import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid, Box } from "@mui/material";
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
  console.log(name);

  const { loading, data } = useQuery(QUERY_CLASS, {
    variables: { name },
  });

  const subject = data?.subject || {};
  const { questions, image, professor } = subject;
  console.log("This is questions ==>", questions);

  function shuffle(array) {
  return Math.floor(Math.random() * array.length);
  }

  function generateQuestions() {
    // empty array to hold Qs
    var quizQuestions = [];

    // while the length of endPassword is less than 5
    while (quizQuestions.length < 5) {
      const randomQuestion = shuffle(questions);
      quizQuestions.push(questions[randomQuestion]);
    }

    console.log("QUIZQs ==>", quizQuestions);
  }

  // start the quiz
  function startQuiz() {
    const shuffledQuestions = Math.floor(Math.random() * questions.length);

    console.log("ShuffleQ ===>", shuffledQuestions);
    
    setNextQuestion()
  }

// Might be able to take out 
  function setNextQuestion() {
    // find the way to clear the div or component
    // add next question 
    // Thats it! :)  

    let userAnswer = event.target.value

    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }

  // function gradeQuiz(){
  //   passes answers to the grading div
  // }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Box sx={{ px: -100, pt: 0, pb: 15 }}>
      <Typography
        class="title"
        variant="h1"
        component="h1"
        align="Center"
        sx={{ pt: 10 }}
        gutterBottom
      >
        {name}
        {startQuiz()}
        {generateQuestions()}
      </Typography>

      <Grid
        container
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex" }}
        alignItems="center"
      >
        <Grid item xs>
          {/* images */}
          <Container>
            <img
              src={images}
              style={{ height: "100%", width: "100%" }}
              align="center"
              alt="Professor Snape"
            />
          </Container>
        </Grid>

        <Grid item xs={5}>
          <Container class="background">{/* <Result /> */}</Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Quiz;
