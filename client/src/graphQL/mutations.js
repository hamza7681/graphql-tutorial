import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation createUser($newUser: UserInput!) {
    user: register(newUser: $newUser) {
      firstName
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($newUser: LoginInput!) {
    token: login(loginUser: $newUser) {
      token
    }
  }
`;

export const CREATE_QUOTE = gql`
  mutation createQuote($data: String!) {
    qoute: addQuote(name: $data)
  }
`;
