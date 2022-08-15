import {gql} from '@apollo/client';

export const GET_FEATURED = gql`
  query GetFeatured {
    featuredCategories {
      data {
        id
        attributes {
          title
          short_desc
          restaurants {
            data {
              id
              attributes {
                name
                address
                lat
                lon
                rating
                short_desc
                genre
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
      }
    }
  }
`;
