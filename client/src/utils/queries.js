import { gql } from "@apollo/client";

// query just ME (single user)
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

// query all classes
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

// query one class
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

// query all users per a house
export const QUERY_ALL_USERS = gql`
{
  users {
    _id
    username
    house
    wand {
      core
      wood
      length
    }
  }
}
`;