import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
  {
    users {
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