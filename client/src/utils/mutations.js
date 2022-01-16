import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
 }
`;

export const LOGIN = gql`
  mutation login($email: String!, password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const UPDATE_USER = gql` 
  mutation updateUser(
      $username: String!
      $email: String!
      password: String!
    ) {
      updateUser(
        username: $username
        email: $email
        password: $password
      ) {
        token
        user {
          _id
          username
        }
      }
   }

)
`;

export const DELETE_USER = gql` 
  mutation deleteUser(

      $username: String!
      $email: String!
      password: String!
    ) {
      deleteUser(
        username: $username
        email: $email
        password: $password
      ) {
        token
        user {
          _id
          username
        }
      }
   }

)
`;

