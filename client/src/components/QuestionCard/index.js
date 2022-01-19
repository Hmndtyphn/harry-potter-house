import React from 'react';
import {
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";

const QuestionCard = (props) => {
  
  const { questions, score, setScore, currentQuestion, setCurrentQuestion } = props;

    // set next question & 
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
    }

  return (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" sx={{ py: 3 }}>
            {questions[currentQuestion].question}
          </Typography>
        </CardContent>
        <CardActions>
          <FormControl>
            <RadioGroup
              aria-label="answers"
              name="answer-buttons"
              value={currentQuestion}
              sx={{ pb: 3, pl: 2 }}
              onChange={handleChange}>
                {questions[currentQuestion].answerOptions.map((answer) => (
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
  )
};

export default QuestionCard;