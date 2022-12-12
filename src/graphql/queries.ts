import { gql } from '@apollo/client';

export const GET_COLLECTIONS = gql`
  query collections($options: CollectionListOptions) {
    collections(options: $options) {
      items
      totalItems
    }
  }
`;
