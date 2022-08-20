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

export const GET_RESTAURANT_BY_CAT = gql`
  query GetRestaurantsByCat($id: ID) {
    restaurants(filters: {menu_categories: {id: {eq: $id}}}) {
      data {
        id
        attributes {
          name
          rating
          image {
            data {
              attributes {
                url
              }
            }
          }
          genre
          address
          short_desc
          lon
          lat
        }
      }
    }
  }
`;
