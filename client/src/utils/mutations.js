import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser {
        id
        email
        password
    }
`;

export const ADD_USER = gql`
  mutation addUser {
      _id
      email
      password
    }
`;

export const SAVE_BOOK = gql`
  mutation saveBook {
      bookId
      description
      title
      image
      link
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook {
      bookid
      description
      title
      image
      link
  }
`;