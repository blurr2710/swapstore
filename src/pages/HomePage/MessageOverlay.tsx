import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

interface MessageOverlayProps {
  isOpen: boolean;
  position: { top: number; left: number } | null;
  onClose: () => void;
}

export const MessageOverlay: React.FC<MessageOverlayProps> = ({ isOpen, position, onClose }) => {
  if (!isOpen || !position) return null;

  return (
    <Box
      position="fixed"
      top={`${position.top}px`}
      left={`${position.left}px`}
      width="300px"
      height="400px"
      bg="white"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
      zIndex={1000}
      padding={4}
      borderRadius="md"
    >
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">Messages</Text>
        {/* Add your messages or message input components here */}
        <Text>Message content goes here...</Text>
      </VStack>
    </Box>
  );
};
