import React from 'react';
import { VStack, Text } from '@chakra-ui/react';
import FeedPost from '../feedposts/FeedPost'
import { SellBar } from '../sellinputbar/SellBar';

const FeedPosts = () => {
  const posts = [
    {
      id: 1,
      imageURL: "https://picsum.photos/468/468",
      creator: "John Doe",
      createdAt: "2023-08-19",
    },
    {
      id: 2,
      imageURL: "https://picsum.photos/468/468",
      creator: "Jane Smith",
      createdAt: "2023-08-20",
    },
    {
      id: 3,
      imageURL: "https://picsum.photos/468/468",
      creator: "Jane Smith",
      createdAt: "2023-08-20",
    },
    {
      id: 4,
      imageURL: "https://picsum.photos/468/468",
      creator: "Jane Smith",
      createdAt: "2023-08-20",
    },
    {
      id: 5,
      imageURL: "https://picsum.photos/468/468",
      creator: "Jane Smith",
      createdAt: "2023-08-20",
    }
  ];

  return (
    <VStack
      justify="top"
      align="center"
      width={"100%"}
      height="100vh"
      overflowY="auto"
      backgroundColor={"#fcfbf9"}
      spacing={4} 
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',  // Hide the scrollbar in WebKit-based browsers (like Chrome, Safari)
        },
        '-ms-overflow-style': 'none',  // Hide the scrollbar in IE and Edge
        'scrollbar-width': 'none',  // Hide the scrollbar in Firefox
      }}
    >
      <SellBar/>

      <Text>
        Trending products
      </Text>
      {posts.map((post) => (
        <FeedPost post={post}/>
      ))}
      
    </VStack>
  );
};

export default FeedPosts;
