import React from "react";
import {
  Flex,
  Text,
  Box,
  Button,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box cursor={"pointer"} fontSize={18}>
          Product Description
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

      <Text fontSize="sm" fontWeight={700}>
        {creatorProfile?.username}{" "}
        <Text as="span" fontWeight={400}>
          {post.caption}
        </Text>
      </Text>
      <Text fontSize="sm" color={"gray"} cursor={"pointer"}>
        View all comments
      </Text>
      {/* COMMENTS MODAL ONLY IN THE HOME PAGE */}

      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
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
