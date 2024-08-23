import React, { useState } from 'react';
import { Flex, Text, Avatar, SkeletonCircle, Skeleton, Box, Button, Tooltip, IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const PostHeader = ({ post }) => {
	const [isFilled, setIsFilled] = useState(false);

	const handleClick = () => {
	  setIsFilled(!isFilled);
	};
	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} my={2}>
			<Flex alignItems={"center"} gap={2}>
			<Avatar name="Profile Name" src="path-to-image.jpg" boxSize={"40px"} bg={"#f75709"}/>
			<Flex fontSize={12} fontWeight={"bold"} gap='2'>
						<Text>Profile Name</Text>
					<Box color={"gray.500"}>• 20s</Box>
				</Flex>
			</Flex>

      {/* Favorites Icon Button with Tooltip */}
	  <Tooltip label="Add to Favorites" placement="top" hasArrow>
      <IconButton
        aria-label="Favorites"
        icon={<StarIcon boxSize={8} />}
        size="lg"
        variant="ghost" // Remove default background and border
        color={isFilled ? "white" : "#f75809b3"}
        _hover={{
          bg: "transparent",
          transform: "scale(1.1)",
		  filter: "drop-shadow(0 0 4px red)", // Add a drop shadow to mimic the outline
        }}
        filter={"drop-shadow(0 0 2px red)"} // Add red outline when not clicked
        onClick={handleClick}
        transition="all 0.2s ease-in-out"
      />
    </Tooltip>		
		</Flex>
	);
};

export default PostHeader;