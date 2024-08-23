import React, { useState } from "react";
import {
  Flex,
  Text,
  Box,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxLength = 100; // Maximum number of characters before truncation

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const description = "This is a default description falkasnd;";

  return (
    <Box mb={10} marginTop={"auto"} className="paragraph" color={"black"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box cursor={"pointer"} fontSize={18} w={"full"}>
          Product Description
          <Text as="span" wordBreak={"break-word"}>
            {description}
          </Text>
        </Box>
      </Flex>

      <Text fontWeight={600} fontSize={"sm"}>
        Original Price
      </Text>

      <Text fontWeight={600} fontSize={"sm"}>
        Selling Price
      </Text>

      <Text fontWeight={600} fontSize={"sm"}>
        Negotiable
      </Text>

      <Text fontWeight={600} fontSize={"sm"}>
        Location
      </Text>

      <Text fontWeight={600} fontSize={"sm"} paddingBottom={"10px"}>
        Time of purchase
      </Text>

      <Text fontSize="sm" fontWeight={700}>
        {creatorProfile?.username}{" "}
        <Text as="span" fontWeight={400}>
          {post.caption}
        </Text>
      </Text>
      <Text fontSize="sm" color={"gray"} cursor={"pointer"}>
        View all comments
      </Text>

      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup
          border="0px"
          borderBottom={"2px"}
          borderColor="gray.300" // Initial border color
          borderRadius="md" // Border radius for rounded corners
          _hover={{ borderColor: "#f75709" }} // Darker border color on hover
          transition="border-color 0.2s ease-in-out" // Smooth transition for border color
        >
          <Input
            variant="outline" // Changed to outline for border styling
            placeholder="Have any questions about the posting?"
            fontSize={14}
            border="none" // Removes default border from Input
            _focus={{ boxShadow: "none" }} // Removes default box shadow on focus
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color="#f75809b3"
              fontWeight={600}
              backgroundColor="transparent" // Initial background color
              transition="all 0.2s ease-in-out" // Smooth transition for hover and active effects
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
