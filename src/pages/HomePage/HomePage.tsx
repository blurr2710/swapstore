import React, { useState } from "react";
import { VStack, HStack, Fade } from "@chakra-ui/react";
import FeedPosts from "../../feedposts/FeedPosts";
import { LeftNavigationBar } from './LeftNavigationBar';
import MapComponent from "../../map/MapComponent";
import { Inbox } from "../../inbox/Inbox";


const Homepage = () => {
  const [buttonClicked, setButtonClicked] = useState<string>("");

  const handleChatClick = (buttonType) => {
    setButtonClicked(buttonType); // Show the message inbox page when chat icon is clicked
  };

  const handleBackClick = () => {
    setButtonClicked(""); // Return to InboxFooter
  };

  const renderLeftWindow = () => {
    console.log("buttas", buttonClicked)
    switch (buttonClicked) {
      case "inbox":
        return <Inbox onChatClick={handleBackClick} />;
      case "map":
        return <MapComponent />;
      default:
        return <LeftNavigationBar onChatClick={handleChatClick}/>
      }
  };

  return (
    <HStack height={"100vh"} backgroundColor={"#fcfbf9"}>
      {/*left window inbox*/}
      {renderLeftWindow()} {/* <-- This is how you execute the function */}
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
