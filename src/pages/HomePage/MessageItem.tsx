import React from "react";
import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";

export const MessageItem = () => {
  return (
    <HStack
      width="100%"
      _hover={{ bg: "#e6e1da" }}  // Background color on hover
      borderRadius={"10px"}
    >
      <Avatar name="Profile Name" src="path-to-image.jpg" boxSize={"40px"} bg={"#f75709"}/>
      <VStack align="start" spacing={"2px"} marginY={"10px"}>
        <Text className="paragraph" style={{fontSize:"15px", color:"#76847e", fontWeight:800}}>Profile Name</Text>
        <Text className="paragraph" style={{fontSize:"12px", color:"#76847e"}}>Message Highlight</Text>
      </VStack>
    </HStack>
  );
};
