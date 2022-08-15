import {gql} from '@apollo/client/core';

export const GET_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      data {
        attributes {
          name
          address
          lat
          lon
          rating
          image {
            data {
              attributes {
                url
              }
            }
          }
          short_desc
          dishes {
            data {
              attributes {
                title
              }
            }
          }
          menu_categories {
            data {
              attributes {
                title
              }
            }
          }
          featured_categories {
            data {
              attributes {
                title
              }
            }
          }
        }
      }
    }
  }
`;
