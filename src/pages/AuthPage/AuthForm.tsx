import { VStack, Image, Text, Box, keyframes } from "@chakra-ui/react";
import Login from './Login';
import Signup from './Signup';
import React, { useState } from "react";
import { CommonButton } from "../../components/CommonButton";

// Define the rotation animation
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Define the glow animation
const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff8c00, 0 0 30px #ff8c00, 0 0 40px #ff8c00, 0 0 50px #ff8c00, 0 0 60px #ff8c00;
    color: #ff8c00;
  }
  50% {
    text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 10px #ff8c00, 0 0 20px #ff8c00, 0 0 30px #ff8c00, 0 0 40px #ff8c00, 0 0 50px #ff8c00;
    color: #fff;
  }
  100% {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff8c00, 0 0 30px #ff8c00, 0 0 40px #ff8c00, 0 0 50px #ff8c00, 0 0 60px #ff8c00;
    color: #ff8c00;
  }
`;

const AuthForm = () => {
  const [isLogin, setLogin] = useState(false);
  const onLogin = () => {
    setLogin(!isLogin);
  };

  return (
    <VStack className="authform">
      <Box margin={"20px"} marginBottom={"200px"}>
        <Image
          src="/singularity.png"  // Replace with your logo's path
          alt="Logo"
          maxWidth="200px"         // Set the maximum width
          maxHeight="200px"        // Set the maximum height
          objectFit="contain"
          animation={`${rotateAnimation} 10s linear infinite`}  // Apply the rotation animation
        />
        <Text
          className="headings"
          fontSize="4xl"
          animation={`${glowAnimation} 5s ease-in-out infinite`}  // Apply the glow animation
        >
          Singularity
        </Text>
      </Box>
      {isLogin ? <Signup /> : <Login />}
      <CommonButton text="LogIn" onClick={onLogin} />
    </VStack>
  );
};

export default AuthForm;
