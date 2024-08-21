import React, { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const FeedPost = ({ post }) => {

	return (
        <Box key={post.id} bg="white" borderRadius="md" boxShadow="md">
            <PostHeader post={post}/>
          <Image src={post.imageURL} alt={`Post by ${post.creator}`} mt={2} />
            <PostFooter post={post}/>
        </Box>
	);
};

export default FeedPost;