import { gql } from 'graphql-request';
import { client } from './../client';
import { useQuery } from '@tanstack/react-query';

export const useGetUsers = () => {
  return useQuery(['users'], getUsers);
};

async function getUsers() {
  const query = gql`
    query getUsers {
      users {
        id
        firstName
        lastName
        email
        username
        image
      }
    }
  `;

  const data = await client.request(query);
  return data;
}
