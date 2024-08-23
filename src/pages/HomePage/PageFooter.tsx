import { HStack, Image, keyframes, Button } from "@chakra-ui/react";
import React from "react";

// Define the rotation animation
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const PageFooter = () => {
  return (
    <HStack className="page-footer">
    </HStack>
  );
};
