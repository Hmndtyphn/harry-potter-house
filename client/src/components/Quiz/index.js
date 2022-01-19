import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardHeader,
  CardContent
} from "@mui/material";
import QuestionCard from "../QuestionCard";
import { styled } from "@mui/material/styles";
import images from "../../assets/images/snape_4.jpeg";
import { useQuery } from "@apollo/client";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { QUERY_CLASS } from "../../utils/queries";
import potionsImage from "../../assets/images/potionsclass.jpeg";

const Quiz = () => {
  const { name } = useParams();

  const { loading, data } = useQuery(QUERY_CLASS, {
    variables: { name },
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(null);
  const [endQuiz, setEndQuiz] = useState(false);

  useEffect(() => {
    if (data && data.subject && !questions) {

      let sliced = data.subject.questions.slice(0, 4);
      setQuestions(sliced);
    }
  }, [data, questions, setQuestions]);

  useEffect(() => {
    if (currentQuestion === 4) {
      setEndQuiz(true);
    }
  }, [currentQuestion, endQuiz]);


  const BackgroundDiv = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${potionsImage})`,
    backgroundSize: "cover",
    height: "100vh",
    color: "white",
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

        {!endQuiz ? (
          <Grid item xs={6} align="center">
            {questions &&
            questions[currentQuestion] &&
            questions[currentQuestion].question ? (
              <Container className="background">
                <QuestionCard
                  questions={questions}
                  score={score}
                  setScore={setScore}
                  currentQuestion={currentQuestion}
                  setCurrentQuestion={setCurrentQuestion}
                />
              </Container>
            ) : (
              <div>Loading</div>
            )}
          </Grid>
        ) : (
          <Grid
            item
            xs={6}
            align="center"
            sx={{ pr: 15 }}>
              <Card variant="outlined" sx={{ py: 10 }}>
                <CardContent>

                    <Typography variant='h5'>Here are the points you've<br /> earned or lost your house: <br />{`${score}`}</Typography>
                  
                </CardContent>
              </Card>
          </Grid>
        )}
      </Grid>
    </BackgroundDiv>
  );
};

export default Quiz;
