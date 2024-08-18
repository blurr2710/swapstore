import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/swapstore.png" w={150} />

          <AnimatePresence mode="wait">
            {isLogin ? (
              <MotionBox
                key="login"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <Login />
              </MotionBox>
            ) : (
              <MotionBox
                key="signup"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <Signup />
              </MotionBox>
            )}
          </AnimatePresence>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14} fontWeight={20}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Button
            backgroundColor="#4e4b52"
            size={"sm"}
            fontSize={14}
            _hover={{ opacity: "0.5" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Button>
        </Flex>
      </Box>

      {/* ---------------- OR -------------- */}
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        my={4}
        gap={1}
        w={"full"}
      >
        <Box flex={2} h={"1px"} bg={"gray.400"} />
        <Text mx={1} color={"black"}>
          OR
        </Text>
        <Box flex={2} h={"1px"} bg={"gray.400"} />
      </Flex>

      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        my={4}
        gap={1}
        w={"full"}
      >
        <Button
          w={"full"}
          backgroundColor="#4e4b52"
          size={"sm"}
          fontSize={14}
          _hover={{ opacity: "0.5" }}
        >
          Browse products at your workspace
        </Button>
      </Flex>
      {/* ---------------- OR -------------- */}

      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        my={4}
        gap={1}
        w={"full"}
      >
        <Box flex={2} h={"1px"} bg={"gray.400"} />
        <Text mx={1} color={isLogin ? "white" : "black"} fontSize={12}>
          We only use your work email for one-time authentication. No adverts or
          unsolicited use, we promise!
        </Text>
        <Box flex={2} h={"1px"} bg={"gray.400"} />
      </Flex>
    </>
  );
};

export default AuthForm;
