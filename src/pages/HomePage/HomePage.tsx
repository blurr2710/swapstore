import React from "react";
import { VStack, Image, HStack, keyframes, Text,IconButton } from "@chakra-ui/react";
import FeedPosts from "../../feedposts/FeedPosts";
import { PageFooter } from "./PageFooter";
import { MessageItem } from "./MessageItem";
import { SearchIcon } from "@chakra-ui/icons"; // Import the search icon from Chakra UI
import { InboxFooter } from "./InboxFooter";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Homepage = () => {
  return (
    <HStack height={"100vh"} backgroundColor={"#fcfbf9"}>
      {/*left window inbox*/}
      <VStack height={"100%"} flex={1} borderColor={"#e6e1da"} borderWidth={"2px"} backgroundColor={"#fcfbf9"}>
        {/*logo name inbox   search button */}
        <HStack width={"100%"} marginBottom={"30px"}>
          <Image
            src="/singularity.png" // Replace with your logo's path
            alt="Logo"
            maxWidth="100" // Set the maximum width
            maxHeight="100px" // Set the maximum height
            objectFit="contain"
            paddingY={"15px"}
            animation={`${rotateAnimation} 10s linear infinite`} // Apply the rotation animation
          />
          <Text className="headings" style={{fontSize:"25px",color:"black", fontWeight:1000}} >Singularity </Text>
          <Text className="headings" style={{fontSize:"25px", color:"black"}} >/ Inbox </Text>
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            size="lg"
            variant="ghost"
            colorScheme="gray"
            _hover={{ bg: "#e6e1da" }} // Optional hover effect
          />
        </HStack>


          {/* main inbox page*/}
          <VStack height={"100%"} overflowY={"scroll"} width={"95%"} backgroundColor={"#fcfbf9"} spacing={"20px"}> 
            {/*message items*/}
            <MessageItem/>
            <MessageItem/>
          </VStack>

          <InboxFooter/>
      </VStack>
      
      {/*right window page*/}
      <VStack flex={3} backgroundColor={"#fcfbf9"}>
        {/*page footer*/}
        <PageFooter/>
        <FeedPosts/>
      </VStack>
    </HStack>
  );
};

export default Homepage;
