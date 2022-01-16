// PMT-8 JE this is for you

import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      house
      wand {
        core
        wood
        length
      }
    }
  }
`;

export const QUERY_ALL_CLASSES = gql`
  {
    query
    classes {
      _id
      name
      description
      professor
      image
      year
    }
  }
`;

export const QUERY_CLASS = gql`
{
  query class($name: String!) {
    class(name: $name) {
      _id
      name
      description
      professor
      image
      questions {
        question
        answerOptions
        isCorrect
      }
    }
  }
}
`;
