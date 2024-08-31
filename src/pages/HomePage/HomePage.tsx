import React, { useState } from "react";
import { VStack, HStack, Fade } from "@chakra-ui/react";
import FeedPosts from "../../feedposts/FeedPosts";
import { LeftNavigationBar } from './LeftNavigationBar';
import MapComponent from "../../map/MapComponent";


const Homepage = () => {



  return (
    <HStack height={"100vh"} backgroundColor={"#fcfbf9"}>
      {/*left window inbox*/}
      <LeftNavigationBar/>

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
