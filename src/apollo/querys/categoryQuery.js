import {gql} from '@apollo/client';

export const GET_CATEGORIES = gql`
  query GetCategories {
    menuCategories {
      data {
        id
        attributes {
          title
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
