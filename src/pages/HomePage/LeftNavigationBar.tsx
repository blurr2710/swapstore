import React from 'react';
import { VStack, IconButton, Tooltip, keyframes, Image, Slide } from '@chakra-ui/react';
import { EmailIcon, StarIcon, ChatIcon } from '@chakra-ui/icons';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
to {
    transform: rotate(360deg);
  }
`;
export const LeftNavigationBar = ({  onChatClick }) => {
  return (
    <VStack
    height={"100%"}
    width={"5%"}
    borderColor={"#e6e1da"}
    borderWidth={"2px"}
    backgroundColor={"#fcfbf9"}
    display={{ base: "none", md: "flex" }} // Hide on small screens (base) and show on medium (md) screens and up
  >

    <Image
      src="/singularity.png" // Replace with your logo's path
      alt="Logo"
      maxWidth="100" // Set the maximum width
      maxHeight="100px" // Set the maximum height
      objectFit="contain"
      paddingY={"15px"}
      animation={`${rotateAnimation} 10s linear infinite`} // Apply the rotation animation
    />
        <VStack spacing={20} padding={4} justify="center" width={"100%"}>
          <Tooltip label="Inbox" placement="top" hasArrow>
            <IconButton
              aria-label="Inbox"
              icon={<EmailIcon boxSize={8} />}
              size="lg"
              variant="ghost"
              colorScheme="gray"
              _hover={{ bg: "#f75809b3", transform: "scale(1.1)" }}
              transition="all 0.2s ease-in-out"
            />
          </Tooltip>

          <Tooltip label="Favorites" placement="top" hasArrow>
            <IconButton
              aria-label="Favorites"
              icon={<StarIcon boxSize={8} />}
              size="lg"
              variant="ghost"
              colorScheme="gray"
              _hover={{ bg: "#f75809b3", transform: "scale(1.1)" }}
              transition="all 0.2s ease-in-out"
            />
          </Tooltip>

          <Tooltip label="Start New Chat" placement="top" hasArrow>
            <IconButton
              aria-label="Start New Chat"
              icon={<ChatIcon boxSize={8} />}
              size="lg"
              variant="ghost"
              colorScheme="gray"
              _hover={{ bg: "#f75809b3", transform: "scale(1.1)" }}
              transition="all 0.2s ease-in-out"
              onClick={()=>onChatClick("inbox")} // Trigger chat click handler
            />
          </Tooltip>
        </VStack>
        </VStack>);
};
