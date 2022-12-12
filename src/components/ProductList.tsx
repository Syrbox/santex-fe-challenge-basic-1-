import { gql, useQuery } from '@apollo/client';
import { GET_COLLECTIONS } from './../graphql/queries';

export function ProductList() {
  const { data, loading, error } = useQuery(
    gql`
      query collections($options: CollectionListOptions) {
        collections(options: $options) {
          items
          totalItems
        }
      }
    `,
    {
      variables: {
        options: {
          skip: 0,
          take: 1,
          sort: {
            id: 'DESC',
            createdAt: 'DESC',
            updatedAt: 'DESC',
            name: 'DESC',
            slug: 'DESC',
            position: 'DESC',
            description: 'DESC',
          },
          filter: {},
          filterOperator: 'AND',
        },
      },
    }
  );
  /* const { data, loading, error } = useQuery(GET_COLLECTIONS, {
    variables: {
      options: {
        skip: 0,
        take: 1,
        sort: {
          id: 'DESC',
          createdAt: 'DESC',
          updatedAt: 'DESC',
          name: 'DESC',
          slug: 'DESC',
          position: 'DESC',
          description: 'DESC',
        },
        filter: {},
        filterOperator: 'AND',
      },
    },
  }); */
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return <div>{data}</div>;
}
