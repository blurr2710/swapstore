import React from 'react';
import { HStack, IconButton, Tooltip, VStack } from '@chakra-ui/react';
import { EmailIcon, StarIcon, ChatIcon } from '@chakra-ui/icons';

export const InboxFooter = () => {
  return (
    <VStack spacing={20} padding={4} justify="center" width={"100%"}>
      {/* Inbox Icon Button with Tooltip */}
      <Tooltip label="Inbox" placement="top" hasArrow>
        <IconButton
          aria-label="Inbox"
          icon={<EmailIcon boxSize={8} />}  // Increased icon size
          size="lg"
          variant="ghost"
          colorScheme="gray"
          _hover={{ bg: "#f75809b3", transform: "scale(1.1)" }} // Hover effect: orange background and scale animation
          transition="all 0.2s ease-in-out" // Smooth transition for the hover effect
        />
      </Tooltip>

      {/* Favorites Icon Button with Tooltip */}
      <Tooltip label="Favorites" placement="top" hasArrow>
        <IconButton
          aria-label="Favorites"
          icon={<StarIcon boxSize={8} />}  // Increased icon size
          size="lg"
          variant="ghost"
          colorScheme="gray"
          _hover={{ bg: "#f75809b3", transform: "scale(1.1)" }} // Hover effect: orange background and scale animation
          transition="all 0.2s ease-in-out" // Smooth transition for the hover effect
        />
      </Tooltip>

      {/* Start Chat Icon Button with Tooltip */}
      <Tooltip label="Start New Chat" placement="top" hasArrow>
        <IconButton
          aria-label="Start New Chat"
          icon={<ChatIcon boxSize={8} />}  // Increased icon size
          size="lg"
          variant="ghost"
          colorScheme="gray"
          _hover={{ bg: "#f75809b3", transform: "scale(1.1)" }} // Hover effect: orange background and scale animation
          transition="all 0.2s ease-in-out" // Smooth transition for the hover effect
        />
      </Tooltip>
    </VStack>
  );
};
