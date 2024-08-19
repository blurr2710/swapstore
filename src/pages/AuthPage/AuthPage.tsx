import {
  Container,
  Flex,
  VStack,
  Box,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import AuthForm from "./AuthForm";
import { AuthPageHero } from "./AuthPageHero";


const AuthPage = () => {
  return (
    <HStack className="authpage">
      {/* sign up form left*/}
      <AuthForm/>
      {/* sign up form right*/}
      <AuthPageHero/>
    </HStack>

  );
};

export default AuthPage;
