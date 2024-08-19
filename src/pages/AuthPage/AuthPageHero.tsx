import React from "react";
import { motion } from "framer-motion";

import { VStack, Box, Text, HStack, Image } from "@chakra-ui/react";

const MotionBox = motion(Box);

const reasons = [
  {
    text: "Verified Sellers",
    image: "/verified-sellers.png",
  },
  {
    text: "Bid on products",
    image: "/bid-on-products.png",
  },
  {
    text: "Diverse Listings",
    image: "/diverse-listings.png",
  },
  {
    text: "Chat with sellers",
    image: "/chat.png",
  },
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
    <HStack spacing={100} alignItems={"center"} justifyContent={"center"}> 
      {reasons.map((reason, index) => (
        <MotionBox
          key={index}
          custom={index}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          borderRadius="md"
          boxShadow="lg" // Drop shadow
        >
          <VStack className="authpage-hero-cards">
            <Image src={reason.image} boxSize={40} mr={2} color="white" />
            <Text className="paragraph">
              {reason.text}
            </Text>
          </VStack>
        </MotionBox>
      ))}
    </HStack>
  );
};

export const AuthPageHero = () => {
  return (
    <VStack
      display={{ base: "none", md: "block" }}
      className="authpage-hero"
    >
      <Text
        textAlign={"center"}
        fontSize={40}
        fontWeight={500}
        paddingBottom={30}
        color={"white"}
        className="headings"
    
      >
        The sing-ultimate platform for corporate professionals to buy and sell anything with trust!
      </Text>
      <AnimatedList />
    </VStack>
  );
};
