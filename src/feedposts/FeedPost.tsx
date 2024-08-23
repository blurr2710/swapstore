import React from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  HStack,
  VStack,
  IconButton,
  Icon,
  Circle,
} from "@chakra-ui/react";
import { FiMapPin, FiTag, FiHeart, FiShare2, FiArrowRight } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import { CommentBar } from "./CommentBar";

// Helper function to get the color for each circle
const getColor = (index: number) => {
  const colors = [
    "red.500",
    "orange.500",
    "yellow.500",
    "green.500",
    "blue.500",
  ];
  return colors[index];
};

const rating = 4.1;

const FeedPost: React.FC<{ post: any }> = ({ post }) => {
  return (
    <Box
      key={post.id}
      bg="white"
      borderRadius="20px"
      boxShadow="0 0 10px 5px #f7580955" // Glowy shadow border
      padding={"20px"}
      textColor={"black"}
      maxWidth="3xl"
      margin={"20px"}
      // Responsive width and padding
      width={{ base: "100%", md: "auto" }}
      padding={{ base: "10px", md: "20px" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "start" }}
      >
        <Box
          position="relative"
          width={{ base: "100%", md: "200px" }}
          height={{ base: "auto", md: "200px" }}
          mb={{ base: "10px", md: "0" }}
        >
          <Image
            src={post.imageURL}
            alt={`Post by ${post.creator}`}
            borderRadius={"12px"}
            maxHeight={{ base: "300px", md: "200px" }}
            maxWidth={{ base: "100%", md: "200px" }}
            height="auto"
            width="100%"
          />
          {/* Overlay Icons */}
          <IconButton
            icon={<FiHeart />}
            aria-label="Add to Favorites"
            position="absolute"
            top="10px"
            right="10px"
            bg="rgba(255, 255, 255, 0.7)"
            borderRadius="50%"
            _hover={{ bg: "#f75809b3" }}
          />
          <IconButton
            icon={<FiArrowRight />}
            aria-label="Arrow"
            position="absolute"
            top="calc(50% - 20px)" // Center vertically with some offset
            right="10px"
            bg="rgba(255, 255, 255, 0.7)"
            borderRadius="50%"
            _hover={{ bg: "#f75809b3" }}
          />
          <IconButton
            icon={<FiShare2 />}
            aria-label="Share"
            position="absolute"
            bottom="10px"
            right="10px"
            bg="rgba(255, 255, 255, 0.7)"
            borderRadius="50%"
            _hover={{ bg: "#f75809b3" }}
          />
        </Box>
        <HStack
          align="start"
          spacing={{ base: "0", md: "10px" }}
          direction={{ base: "column", md: "row" }}
          width="full"
        >
          <VStack
            align="start"
            spacing="4"
            width={{ base: "80%", md: "50%" }}
            maxWidth={{ base: "100%", md: "50%" }}
            borderRightWidth={{ base: "0", md: "2px" }}
            borderColor={"#e6e1da"}
            paddingRight={{ base: "0", md: "10px" }}
            mb={{ base: "10px", md: "0" }}
          >
            <Box>
              <Text
                fontWeight={"800"}
                paddingLeft={{ base: "0", md: "10px" }}
                fontSize={{ base: "lg", md: "md" }}
              >
                Seller Name
              </Text>
            </Box>

            <Box display="flex" alignItems="center" paddingLeft={{ base: "0", md: "10px" }}>
              <Icon as={FiMapPin} w={4} h={4} color="red.500" />
              <Text ml={2} fontSize={{ base: "sm", md: "md" }}>
                Location of the item
              </Text>
            </Box>

            <Text
              paddingLeft={{ base: "0", md: "10px" }}
              fontSize={{ base: "sm", md: "14px" }}
            >
              Product description Product description Product description
              Product description Product description Product description
              Product description Product description Product description

              Product description Product description Product description
              Product description Product description Product description
            </Text>
          </VStack>

          <VStack
            width={{ base: "50%", md: "50%" }}
            maxWidth={{ base: "100%", md: "50%" }}
            paddingRight={{ base: "0", md: "10px" }}
          >
            <Box display={"flex"} padding={"10px"} flexDirection={{ base: "column", md: "row" }}>
              <HStack spacing={2} mb={{ base: "10px", md: "0" }}>
                {/* Multicolored Circles */}
                {[...Array(5)].map((_, index) => (
                  <Circle
                    key={index}
                    size="10px"
                    bg={index < rating ? getColor(index) : "gray.300"}
                  />
                ))}

                {/* Green Box with Rating */}
                <Box
                  bg="green.500"
                  color="white"
                  padding="4px 8px"
                  borderRadius="md"
                >
                  <Text fontWeight="bold">{rating}</Text>
                </Box>
              </HStack>
            </Box>
            <HStack spacing={2} alignItems="center">
              <Icon as={FaRupeeSign} w={5} h={5} color="green.500" />
              <Text fontSize={{ base: "lg", md: "lg" }} fontWeight="bold">
                12,000
              </Text>
            </HStack>
          </VStack>

        </HStack>
      </Flex>
      <Text
        paddingTop={"10px"}
        fontSize={{ base: "sm", md: "12px" }}
        color={"grey"}
      >
        View All comments
      </Text>
      <CommentBar />
    </Box>
  );
};

export default FeedPost;
