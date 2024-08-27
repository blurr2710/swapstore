import React from 'react';
import { Flex, InputGroup, Input, InputRightElement, IconButton, Button, Icon,Text  } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'; // Using a general add icon as a substitute for a sell icon
import { FiFilter } from "react-icons/fi";

export const SellBar = () => {
  return (
    <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"100%"} marginY={"30px"}> 
      <InputGroup
        border="2px"
        borderColor="gray.300" // Initial border color
        borderRadius="lg" // Border radius for rounded corners
        _hover={{ borderColor: "#f75709", backgroundColor:"gray.300"  }} // Darker border color on hover
        backgroundColor={"gray.100"}
        transition="border-color 0.2s ease-in-out" // Smooth transition for border color
      >
        <Input
          variant="outline" // Changed to outline for border styling
          placeholder="Would you like to post a product?"
          fontSize={14}
          border="none" // Removes default border from Input
          _focus={{ boxShadow: "none" }} // Removes default box shadow on focus
        />
        <InputRightElement>
          <IconButton
            aria-label="Sell"
            icon={<AddIcon />} // Replace with an appropriate sell icon if available
            fontSize={16}
            color={"#f75809b3"}
            _hover={{ color: "white", bg: "#f75709" }} // Change icon color and background on hover
            bg={"transparent"}
            border="none" // Remove default button border
          />
        </InputRightElement>
      </InputGroup>
      <Button
        backgroundColor={"#f75709"}
        size="sm"
        className='paragraph'
        textColor={"white"}
        borderRadius="md"
        rightIcon={<Icon as={FiFilter} w={5} h={5} />}
        _hover={{
          bg: " #f75709", // Change button color on hover
          boxShadow: "0 0 15px #f75709", // Glow effect
          transform: "scale(1.05)" // Optional: slightly increase size on hover
        }}
        transition="all 0.3s ease" // Smooth transition for hover effects
      >
        All filters
      </Button>
    </Flex>
  );
};
