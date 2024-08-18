import {
  Container,
  Flex,
  VStack,
  Box,
  Text,
  HStack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import AuthForm from "./AuthForm";
import { motion } from "framer-motion";

import { FaShieldAlt, FaFilter, FaBoxOpen, FaBolt } from "react-icons/fa";

const MotionBox = motion(Box);

const reasons = [
  { text: "Verified Sellers: Only corporate professionals are allowed, ensuring trust and authenticity.", icon: FaShieldAlt },
  { text: "Convenience: Filter products by company, making transactions easy within your corporate park.", icon: FaFilter },
  { text: "Diverse Listings: Sell anything from subscriptions to electronics.", icon: FaBoxOpen },
  { text: "Fast Delievery: Choose to pickup yourself or we deliver within 1 day!", icon: FaBolt },

];


const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.8, // Delay each item by 0.3s
    },
  }),
};

const AnimatedList = () => {
  return (
    <VStack spacing={10} align="start">
      {reasons.map((reason, index) => (
        <MotionBox
          key={index}
          custom={index}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          border="3px solid transparent" // Invisible border
          borderRadius="md"
          boxShadow="lg" // Drop shadow
        >
          <HStack align="start">
            <Box as="span" fontSize="lg" mr={2}>
              •
            </Box>
            <Icon as={reason.icon} boxSize={5} mr={2} color="black.500" />
            <Text fontSize="lg" fontWeight="bold">
              {reason.text}
            </Text>
          </HStack>
        </MotionBox>
      ))}
    </VStack>
  );
};


const AuthPage = () => {
  return (
    <Flex
      minH={"100vh"}
      w="100vw"
      justifyContent={"center"}
      alignItems={"center"}
      px={4}
      className="gradient"
    >
      <Container maxW={"100%"} padding={0} h="100%">
        <Flex
          direction="row"
          justifyContent={"center"}
          alignItems={"center"} // Ensure items stretch to the full height
          gap={1}
          h="100%" // Ensure this Flex container takes up full height
        >
          {/* Left hand-side */}
          <VStack spacing={4} alignItems={"center"} justifyContent={"center"} display={{ base: "none", md: "block" }} >
            <Text textAlign={"center"} fontSize={40} fontWeight={600} paddingBottom={30}>Why buy/sell used products on SwapStore?</Text>
            <AnimatedList />
          </VStack>

          {/* Middle line */}
          <Box
            display={{ base: "none", md: "block" }}
            height={"100vh"} // Make the middle line take the full height
            width={"1px"}   // Set width as required
            bg={"gray.400"}
            marginX={20}
          />

          {/* Right hand-side */}
          <VStack
            spacing={4}
            align={"stretch"}
            backgroundColor={"white"}
            borderRadius={"24px"}
            textColor={"black"}
            p={4} // General padding applied to all sides
            pb={{ base: 2, md: 4, lg: 100 }} // Responsive padding-bottom
            pt={{ base: 2, md: 4, lg: 50 }} // Responsive padding-top
            pl={{ base: 2, md: 4, lg: 50 }} // Responsive padding-left
            pr={{ base: 2, md: 4, lg: 50 }} // Responsive padding-right
            justifyContent="center" // Centers content vertically
            alignItems="center" // Centers content horizontally
          >
            <AuthForm />
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
