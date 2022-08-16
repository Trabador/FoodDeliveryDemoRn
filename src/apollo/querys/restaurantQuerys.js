import {gql} from '@apollo/client/core';

export const GET_DISHES = gql`
  query GetDishes($id: ID) {
    restaurant(id: $id) {
      data {
        attributes {
          dishes {
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
                short_desc
                price
              }
            }
          }
        }
      }
    }
  }
`;
