import { useQuery } from "react-query";
import { gql } from "graphql-request";
import { graphQLClient } from "common/di";
import React from "react";

export const getNewsfeedItemsQuery = gql`
query GetNewsfeedItems($limit: Int, $pointer: Int) {
  getNewsfeedItemsV2(limit: $limit, pointer: $pointer) {
    id
    serial
    type
    user {
      id
      username
      name
      photoURL
      value
      verifiedBadge {
        id
        status
      }
    }
    items {
      ... on NewsfeedMomentOutput {
        id
        serial
        caption
        title
        tags  
        creator {
          id
          name
          username
          photoURL
          verifiedBadge {
            id
            status
          }
        }
        owner {
          id
          name
          username
          photoURL
          verifiedBadge {
            id
            status
          }
        }
        assets {
          type
          url
          thumbnail
          text
          taggedUsers {
            user {
              id
              name
              username
              photoURL
              verifiedBadge {
                id
                status
              }
              followed
            }
            username
            location {
              x
              y
            }
          }
        }
        objectURL
        value
        createdAt
        commentsCount
        purchasedByCount
        isTrending
        tradingStage {
          stage
          progress
        }
        taggedUsers
        reaction {
          isReacted
          type
        }
        totalReactionCount
        reactionCounts {
          type
          count
        }
        bounty {
          id
          title
          caption
          instructions
          posterURL
          creator {
            username
            photoURL
            verifiedBadge {
              id
              status
            }
          }
          topEntries {
            title
            caption
            assets {
              type
              url
              thumbnail
            }
            creator {
              photoURL
              username
            }
            value
          }
          tags
          prize
          expiryDate
          entriesCount
        }
        bountyRank
        bestCommentBounty {
          id
          prize
          expiryDate
        }
        isListed
        recentComment{
         id
         user {
         id
         username
         photoURL
         verifiedBadge {
           id
           status
           }
         }
         body
         createdAt
         updatedAt
         taggedUsers
         totalReactionCount
         isReacted
        }
        location {
          id
          name
          formattedAddress
          latitude
          longitude
        }
        totalGiftCount
        gift {
          hasGifted
          type
          coins
        }  
        allAssetTaggedUsers {
          id
          name
          username
          followed
          photoURL
          verifiedBadge {
            id
            status 
          }
        }
      }
      ... on NewsfeedUserPurchaseItemOutput {
        user {
          id
          name
          username
          photoURL
          value
          owner {
            id
            name
            username
            photoURL
            value
            verifiedBadge {
              id
              status
            }
          }
          verifiedBadge {
            id
            status
          }
        }
        latestMomentUrl
        latestMomentAsset {
          url
          type
          thumbnail
        }
        purchaseId
        purchasedAt
        cost
        purchasedByCount
        followersCount
        growthRate
      }
    }
  }
}
`

export const useGetNewsfeed = (limit: number, pointer: number) => {
  const newsfeed = useQuery(['get-newsfeed'], async () => {
    const response = await graphQLClient.request(
      getNewsfeedItemsQuery, 
      {
        limit,
        pointer
      }
    )

    if (response.error) {
      return response.error;
    }

    return response;
  })

  React.useEffect(() => {
    if (newsfeed.error) {
      console.log('Something went wrong');
    }

  }, [newsfeed.error]);

  return newsfeed;
}