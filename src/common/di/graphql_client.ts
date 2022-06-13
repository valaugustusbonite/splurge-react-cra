import { GraphQLClient } from "graphql-request";
import storage from 'utils/storage';

const API_URL = `${process.env.REACT_APP_API_URL}/graphql` ?? '';

const token = storage.getToken();

export const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
    'x-client-id': process.env.REACT_APP_CLIENT_ID ?? '',
    'x-client-api-key': process.env.REACT_APP_CLIENT_API_KEY ?? '',
  }
});

