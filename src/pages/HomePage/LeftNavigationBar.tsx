// src/components/LeftNavigationBar.tsx

import React from 'react';
import { VStack, IconButton, Tooltip, Image } from '@chakra-ui/react';
import { FaHome, FaEnvelope, FaStar, FaComments } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



// Common styles for icons
const iconStyles = {
  fontSize: '40px', // Set the font size for the icon
  transition: 'all 0.2s ease-in-out', // Smooth transition effect
  _hover: {
    transform: 'scale(1.1)', // Scale effect on hover
  },
};

// Common styles for buttons
const buttonStyles = {
  size: 'lg',
  variant: 'ghost',
  colorScheme: 'gray',
  _hover: {
    bg: '#f75809b3', // Background color on hover
  },
  transition: 'all 0.2s ease-in-out', // Smooth transition effect
};



export const LeftNavigationBar = ({ }) => {
  
  const navigate = useNavigate(); // Get the navigate function from react-router
  const handleInboxClick = () => {
    navigate('/inbox'); // Navigate to the Inbox page
  };
  const handleHomeClick = () => {
    navigate('/'); // Navigate to the Inbox page
  };
  return (
    <VStack
      height={"100%"}
      width={"5%"}
      borderColor={"#e6e1da"}
      borderWidth={"2px"}
      backgroundColor={"#fcfbf9"}
      spacing={"20px"}
      display={{ base: "none", md: "flex" }} // Hide on small screens and show on medium screens and up
    >
      <Image
        src="/singularity.png" // Replace with your logo's path
        alt="Logo"
        maxWidth="100" // Set the maximum width
        maxHeight="100px" // Set the maximum height
        objectFit="contain"
        paddingY="15px"
      />

      <VStack spacing={20} padding={4} justify="center" width="100%">
        {/* Home Icon Button with Tooltip */}
        <Tooltip label="Home" placement="top" hasArrow>
          <IconButton
            aria-label="Home"
            icon={<FaHome style={iconStyles} />} // Apply common icon styles
            {...buttonStyles} // Apply common button styles
            onClick={handleHomeClick}
          />
        </Tooltip>

        {/* Inbox Icon Button with Tooltip */}
        <Tooltip label="Inbox" placement="top" hasArrow>
          <IconButton
            aria-label="Inbox"
            icon={<FaEnvelope style={iconStyles} />} // Apply common icon styles
            {...buttonStyles} // Apply common button styles
            onClick={handleInboxClick}
          />
        </Tooltip>

        {/* Favorites Icon Button with Tooltip */}
        <Tooltip label="Favorites" placement="top" hasArrow>
          <IconButton
            aria-label="Favorites"
            icon={<FaStar style={iconStyles} />} // Apply common icon styles
            {...buttonStyles} // Apply common button styles
          />
        </Tooltip>

      </VStack>
    </VStack>
  );
};

export default LeftNavigationBar;
