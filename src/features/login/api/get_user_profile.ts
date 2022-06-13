import { useQuery } from "react-query";
import { graphQLClient} from 'common/di';
import { gql } from "graphql-request";
import React from "react";

export const getUserProfileQuery = gql`
  query {
    getUserProfile {
      id
      name
      username
      value
      growthRate
      gender
      birthdate
      photoURL
      owner {
        id
        name
        username
        photoURL
        value
      }
      aboutMe
      socialProfiles {
        id
        socialId
        username
        link
        provider
        isVisibleToProfile
      }
    }
  }
`
export const useGetProfile = () => {
  const profile = useQuery(['get-profile'], async () => {
    const response = await graphQLClient.request(getUserProfileQuery);
    

    if (response.error) {
      console.log(response.error);
      return response.error;
    }

    return response;
  }, {
    onError: (error) => console.log(`ERROR: ${error}`)
  })

  React.useEffect(() => {
    if (profile.error) {
      //console.log('Something went wrong');
      console.log(`ERROR: ${profile.error}`)
    }

  }, [profile.error]);

  return profile;
}