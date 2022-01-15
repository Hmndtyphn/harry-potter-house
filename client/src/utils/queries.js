import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
  {
    users {
      _id
      username
      email
      house
      wand {
        _id
        core
        wood
        length
      }
    }
  }
`;

export const QUERY_ONE_USER = gql`
  {
    user {
      _id
      username
      email
      house
      wand {
        _id
        core
        wood
        length
      }
    }
  }
`;