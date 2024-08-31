import React, { useState } from "react";
import { HStack, VStack, Box, Text, Avatar, Stack, useBreakpointValue, Flex, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LeftNavigationBar from "../HomePage/LeftNavigationBar";

const users = [
  { id: 1, name: "John Doe",date:"12oct 2024", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Jane Smith", date:"12oct",avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Alice Johnson", date:"12oct",avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "don", date:"12oct",avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 5, name: "calloer Johnson",date:"12oct", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 6, name: "popo Johnson", date:"12oct",avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 6, name: "popo Johnson",date:"12oct", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 8, name: "popo Johnson",date:"12oct", avatar: "https://i.pravatar.cc/150?img=3" },

];
const messagesData = [
  { id: 1, text: "Hey! How are you?", sender: true },
  { id: 2, text: "I'm good, thanks! How about you?", sender: false },
  { id: 3, text: "Doing well! What's up?", sender: true },
  { id: 4, text: "Doing well! What's up?", sender: false },
  { id: 5, text: "Doing well! What's up?", sender: true },
  { id: 6, text: "Doing well! What's up?", sender: false },
  { id: 7, text: "Doing well! What's up?", sender: true },
  { id: 8, text: "Doing well! What's up?", sender: false },
  { id: 9, text: "Doing well! What's up?", sender: true },
  { id: 10, text: "Doing well! What's up?", sender: false },
  { id: 11, text: "Doing well! What's up?", sender: true },
  { id: 12, text: "Doing well! What's up?", sender: false },

];
const messages = {
  1: ["Hey John! How are you?", "I wanted to catch  catch catch catchup."],
  2: ["Hi Jane! Let's meet for coffee.", "What time works for you?"],
  3: ["Hello Alice! How's your project going?", "Let me know if you need any help."],
  4: ["Hello Alice! How's your project going?", "Let me know if you need any help."],
  5: ["Hello Alice! How's your project going?", "Let me know if you need any help."],
  6: ["Hello Alice! How's your project going?", "Let me know if you need any help."]
};

const InboxPage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleUserClick = (userId: number) => {
    if (isMobile) {
      navigate(`/messages/${userId}`);
    } else {
      setSelectedUser(userId);
    }
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <HStack height="100vh" backgroundColor={"#fcfbf9"}>
      <LeftNavigationBar/>
      {/* User Profiles */}
      <VStack
        width={{ base: "100%", md: "30%" }}
        spacing={4}
        height={"100%"}
        overflowY="scroll"
      >
        {users.map(user => (
          <HStack
            key={user.id}
            borderWidth="1px"
            borderRadius="md"
            height={"20%"}
            minHeight={"20%"}
            width={"100%"}
            cursor="pointer"
            _hover={{ bg: "#f75809b3" }}
            onClick={() => handleUserClick(user.id)}
            padding={"20px"}
            alignItems={"top"}
          >
            <Avatar src={user.avatar} />
            <Box alignContent={"row"} maxWidth={"100%"}>
              <Text className="smallheading" paddingBottom={"40px"} fontWeight={"1000"}>{user.name}</Text>
              <Text className="smallheading" color={"grey"}  overflow="hidden" textOverflow="ellipsis">{messages[1]}</Text>
            </Box>
            <Text className="smallheading" color={"grey"} fontSize={"12px"}>{user.date}</Text>
          </HStack>
        ))}
      </VStack>

      {/* Message Texts */}
      <Box width="100%" height="100vh" p={4} bg="#fcfbf9" alignContent={"flex-end"} className="smallheading">
      <VStack spacing={4} overflowY="auto" maxHeight="80vh">
        {messagesData.map((message) => (
          <Flex
            key={message.id}
            align="center"
            justify={message.sender ? "flex-end" : "flex-start"}
            w="100%"
          >
            {!message.sender && (
              <Avatar size="sm" name="Receiver" src="receiver-avatar-url" />
            )}
            <Box
              bg={message.sender ? "#f75809b3" : "gray.300"}
              color={message.sender ? "white" : "black"}
              p={3}
              borderRadius="lg"
              maxW="70%"
              ml={message.sender ? 2 : 0}
              mr={message.sender ? 0 : 2}
            >
              <Text>{message.text}</Text>
            </Box>
            {message.sender && (
              <Avatar size="sm" name="Sender" src="sender-avatar-url" />
            )}
          </Flex>
        ))}
      </VStack>
      <HStack mt={4} spacing={2}>
        <Input
          flex={1}
          placeholder="Type a message..."
        />
        <Button backgroundColor={"#f75709"}>
          Send
        </Button>
      </HStack>
    </Box>
    </HStack>
  );
};

export default InboxPage;
