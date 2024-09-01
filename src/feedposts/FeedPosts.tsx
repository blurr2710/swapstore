import React from 'react';
import { VStack } from '@chakra-ui/react';
import FeedPost from '../feedposts/FeedPost';
import { SellBar } from '../sellinputbar/SellBar';

const FeedPosts = () => {
  const posts = [
    {
      id: 1,
      imageURL: "https://picsum.photos/300/300",
      creator: "John Doe",
      createdAt: "2023-08-19",
    },
    {
      id: 2,
      imageURL: "https://picsum.photos/300/300",
      creator: "Jane Smith",
      createdAt: "2023-08-20",
    },
    {
      id: 3,
      imageURL: "https://picsum.photos/300/300",
      creator: "Jane Smith",
      createdAt: "2023-08-20",
    },
    {
      id: 4,
      imageURL: "https://picsum.photos/300/300",
      creator: "Jane Smith",
      createdAt: "2023-08-20",
    },
    {
      id: 5,
      imageURL: "https://picsum.photos/300/300",
      creator: "Jane Smith",
      createdAt: "2023-08-20",
    },
  ];

  return (
    <VStack
      justify="top"
      align="left"
      width={"100%"}
      height="100vh"
      overflowY="auto"
      backgroundColor={"#fcfbf9"}
      spacing={4} 
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      }}
    >
      <SellBar />

      {posts.map((post) => (
        <FeedPost key={post.id} post={post} /> // Added key prop here
      ))}
      
    </VStack>
  );
};

export default FeedPosts;
