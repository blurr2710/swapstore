import React from "react";
import {
  VStack,
  Image,
  HStack,
  keyframes,
  Text,
  IconButton,
} from "@chakra-ui/react";
import FeedPosts from "../../feedposts/FeedPosts";
import { PageFooter } from "./PageFooter";
import { MessageItem } from "./MessageItem";
import { SearchIcon } from "@chakra-ui/icons"; // Import the search icon from Chakra UI
import { InboxFooter } from "./InboxFooter";
import MapComponent from "../../map/MapComponent";

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
      <VStack
        height={"100%"}
        width={"5%"}
        borderColor={"#e6e1da"}
        borderWidth={"2px"}
        backgroundColor={"#fcfbf9"}
        display={{ base: "none", md: "flex" }} // Hide on small screens (base) and show on medium (md) screens and up
      >
        <Image
          src="/singularity.png" // Replace with your logo's path
          alt="Logo"
          maxWidth="100" // Set the maximum width
          maxHeight="100px" // Set the maximum height
          objectFit="contain"
          paddingY={"15px"}
          animation={`${rotateAnimation} 10s linear infinite`} // Apply the rotation animation
        />
        <InboxFooter/>
      </VStack>
      
      {/*right window page*/}
      <VStack
        justifyContent={"left"}
        alignItems={"left"}
        alignContent={"left"}
        width={"100%"}
      >
        <FeedPosts />
      </VStack>
      <MapComponent />
    </HStack>
  );
};

export default Homepage;
