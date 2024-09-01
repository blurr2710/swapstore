import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons'; // Import IconType for typing the icon prop

interface CommonButtonProps {
  icon?: IconType; // Make icon optional and type it as IconType from react-icons
  text: string;
  [key: string]: any; // Allow other props to be passed through
}

export const CommonButton: React.FC<CommonButtonProps> = ({ icon, text, ...rest }) => {
  return (
    <Button
      backgroundColor={"#f75709"}
      size="sm"
      className='paragraph'
      textColor={"white"}
      borderRadius="md"
      rightIcon={icon ? <Icon as={icon} w={5} h={5} /> : undefined} // Use undefined instead of null
      _hover={{
        bg: " #f75709", // Change button color on hover
        boxShadow: "0 0 15px #f75709", // Glow effect
        transform: "scale(1.05)" // Slightly increase size on hover
      }}
      transition="all 0.3s ease" // Smooth transition for hover effects
      {...rest}
    >
      {text}
    </Button>
  );
};
