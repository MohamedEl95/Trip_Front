import { gql } from "graphql-request";
import { apiGraphqlInstance } from "../api/axios";

export const GET_CLIENT_BY_FULL_NAME = gql`
  query GetClientByFullName($firstname: String!, $lastname: String!) {
    getClientByFullName(firstname: $firstname, lastname: $lastname) {
      id
      lastname
      firstname
      email
      numpassport
      address
      date_birth
      phoneNumber
      trip {
        id
        clientId
        hotel {
          id
          name
          address
          ville
          website
          rating
          image
          phoneNumber
          email
        }
        checkInDate
        type
        checkOutDate
      }
    }
  }
`;

export const GET_BASIC_CLIENT_BY_FULL_NAME = gql`
  query GetBasicClientByFullName($firstname: String!, $lastname: String!) {
    getClientByFullName(firstname: $firstname, lastname: $lastname) {
      id
      trip {
        id
        clientId
        hotel {
          id
          name
          address
          ville
          website
          rating
          image
          phoneNumber
          email
        }
      }
    }
  }
`;

export const getAllClientByFullName = async (firstname:string, lastname:string) => {
  
    const response = await apiGraphqlInstance.post("", {
      query: GET_CLIENT_BY_FULL_NAME,
      variables: { firstname, lastname },
    });
    return response.data;
  
};


