import React, { useState } from "react";
import { VStack, Text, Button, Box, ListItem, Collapse, List, IconButton, Flex } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
const ProductFilterList = () => {
    const [expandedItems, setExpandedItems] = useState({});
  
    const toggleItem = (index) => {
      setExpandedItems((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    };
  
    const items = [
      {
        label: 'Item 1',
        subItems: ['Subitem 1-1', 'Subitem 1-2', 'Subitem 1-3', 'Subitem 1-1', 'Subitem 1-2', 'Subitem 1-3', 'Subitem 1-1', 'Subitem 1-2', 'Subitem 1-3', 'Subitem 1-1', 'Subitem 1-2', 'Subitem 1-3', 'Subitem 1-1', 'Subitem 1-2', 'Subitem 1-3', 'Subitem 1-1', 'Subitem 1-2', 'Subitem 1-3', 'Subitem 1-1', 'Subitem 1-2', 'Subitem 1-3', 'Subitem 1-1', 'Subitem 1-2', 'Subitem 1-3'],
      },
      {
        label: 'Item 2',
        subItems: ['Subitem 2-1', 'Subitem 2-2'],
      },
      {
        label: 'Item 3',
        subItems: ['Subitem 3-1'],
      },
    ];
  
    return (
      <VStack
        spacing={4}
        align="stretch"
        h="full"
        overflowY="scroll" // Makes the list scrollable
        p={4}
        bg="gray.100"
        maxH="100%"  // Ensure the list does not exceed its container
        borderRadius="md"
      >
        {items.map((item, index) => (
          <Box key={index} borderWidth="1px" borderRadius="md" p={2} bg="white">
            <Flex justify="space-between" align="center">
            <IconButton
                icon={expandedItems[index] ? <MinusIcon /> : <AddIcon />}
                size="sm"
                onClick={() => toggleItem(index)}
                aria-label="Toggle Sublist"
              />
              <Text fontSize="lg">{item.label}</Text>
            </Flex>
            <Collapse in={expandedItems[index]} animateOpacity>
              <List spacing={2} mt={2}>
                {item.subItems.map((subItem, subIndex) => (
                  <ListItem
                    key={subIndex}
                    p={2}
                    borderRadius="md"
                    _hover={{ bg: 'gray.200' }}
                    cursor="pointer"
                  >
                    {subItem}
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </VStack>
    );
  };
  
export const SideNavBar = () => {
  return (
    <VStack
      display={{ base: "none", lg: "flex" }}
      flex={1}
      bg="red.200"
      justify="center"
      align="center"
      p={4}
    >
      <Button colorScheme="blue" mb={4}>
        Current workspace
      </Button>
      <Box flex={1} w="full" maxH="calc(100vh - 100px)">
          <ProductFilterList />
    </Box>
    </VStack>
  );
};
