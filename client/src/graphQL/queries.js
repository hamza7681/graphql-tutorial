import { gql } from "@apollo/client";

export const GET_ALL_QUOTES = gql`
  query getAllQuotes {
    quotes {
      _id
      name
      by {
        _id
        firstName
      }
    }
  }
`;

export const GET_MY_PROFILE = gql`
  query getProfile {
    user: myProfile {
      firstName
      lastName
      email
      quotes {
        name
      }
    }
  }
`;
