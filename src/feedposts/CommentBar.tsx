import React from 'react'
import { Flex, InputGroup, Input, InputRightElement, IconButton, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'; // Using a general add icon as a substitute for a sell icon

export const CommentBar = () => {
  return (
    <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"100%"} marginY={"10px"}>
      <InputGroup
        border="2px"
        borderColor="gray.300" // Initial border color
        borderRadius="md" // Border radius for rounded corners
        _hover={{ borderColor: "#8947fd",backgroundColor:"gray.300" }} // Darker border color on hover
        transition="border-color 0.2s ease-in-out" // Smooth transition for border color
        backgroundColor={"gray.100"}
      >
        <Input
          variant="outline" // Changed to outline for border styling
          placeholder="Ask the seller anything about the product"
          fontSize={14}
          border="none" // Removes default border from Input
          _focus={{ boxShadow: "none" }} // Removes default box shadow on focus
        />
        <InputRightElement>
          <IconButton
            aria-label="Sell"
            icon={<AddIcon />} // Replace with an appropriate sell icon if available
            fontSize={14}
            color={"#f75809b3"}
            _hover={{ color: "white", bg: "#8947fd" }} // Change icon color and background on hover
            bg={"transparent"}
            border="none" // Remove default button border
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}
