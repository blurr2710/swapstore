import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  HStack,
  VStack,
  IconButton,
  Icon,
  Avatar,
  Divider,
  AspectRatio,
  Circle,
  Button,
} from "@chakra-ui/react";
import {
  FiHeart,
  FiShare2,
} from "react-icons/fi";
import { CommentBar } from "./CommentBar";
import { FaDollarSign, FaRupeeSign, FaShoppingCart } from "react-icons/fa";
import { CommonButton } from "../components/CommonButton";

const images = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg"];
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return "product_images/" + images[randomIndex];
};

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
  const [isExpanded, setIsExpanded] = useState(false);
  const randomImage = getRandomImage();

  return (
    <Box
      key={post.id}
      bg="white"
      borderRadius="10px"
      boxShadow="sm"
      className="smallheading"
      padding="20px"
      margin="20px auto"
      width="60%"
    >
      {/* Header with Avatar, Name, and Headline */}
      <HStack spacing="3" mb="4">
        <Avatar name={post.creator} src={post.creatorAvatar} />
        <VStack align="start" spacing="1">
          <Text fontWeight="bold" fontSize="md">
            Abhinav Vashisht
          </Text>
          <Text fontSize="xs" color="gray.400">
            12 Aug 2022
          </Text>
        </VStack>
      </HStack>

      {/* Post Content */}
      <Box mb="4" position="relative">
        <AspectRatio ratio={4 / 3} borderRadius="12px" overflow="hidden">
          <Image
            src={randomImage}
            alt={`Post by ${post.creator}`}
            width="100%"
            height="100%"
          />
        </AspectRatio>
        <IconButton
          icon={<FiHeart />}
          aria-label="Add to Favorites"
          position="absolute"
          top="10px"
          right="10px"
          bg="rgba(255, 255, 255, 0.8)"
          borderRadius="50%"
          _hover={{ bg: "#f75809b3" }}
        />
        <IconButton
          icon={<FiShare2 />}
          aria-label="Share Post"
          position="absolute"
          bottom="10px"
          right="10px"
          bg="rgba(255, 255, 255, 0.8)"
          borderRadius="50%"
          _hover={{ bg: "#f75809b3" }}
        />
      </Box>
      <Box>
        <Text
          noOfLines={isExpanded ? undefined : 3}
          display="-webkit-box"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="pre-wrap"
          wordBreak="break-word"
          style={{
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: isExpanded ? "none" : 3,
          }}
        >
          Selling this random sofa that is very comfortable and stylish. It
          comes with a modern design and high-quality materials. Perfect for any
          living room or office space. Don't miss out on this amazing deal!
        </Text>
        <Button
          size="sm"
          mt="2"
          variant="link"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "More"}
        </Button>
      </Box>

      <Divider mb="4" />

      <HStack width={"100%"} justifyContent="space-between">
        <VStack>
          <Box display={"flex"} padding={"10px"}>
            <HStack spacing={2}>
              {[...Array(5)].map((_, index) => (
                <Circle
                  key={index}
                  size="10px"
                  bg={index < rating ? getColor(index) : "gray.300"}
                />
              ))}
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
            <Text fontWeight="bold">12,000</Text>
          </HStack>
        </VStack>
        <VStack>
        <CommonButton 
          text="Offer a price" 
          icon={FaDollarSign}
        />
        <CommonButton 
          text="Buy Now" 
          icon={FaShoppingCart} 
        />     
      </VStack>
      </HStack>

      <Text mt="4" fontSize="sm" color="gray.500">
        View all comments
      </Text>
      <CommentBar />
    </Box>
  );
};

export default FeedPost;
