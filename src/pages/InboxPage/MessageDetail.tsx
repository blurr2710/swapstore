import React from "react";
import { useParams } from "react-router-dom";
import { VStack, Text, Avatar, Box } from "@chakra-ui/react";

// Define users and messages within the component
const users = [
  { id: 1, name: "John Doe", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Alice Johnson", avatar: "https://i.pravatar.cc/150?img=3" },
];

const messages = {
  1: ["Hey John! How are you?", "I wanted to catch up."],
  2: ["Hi Jane! Let's meet for coffee.", "What time works for you?"],
  3: ["Hello Alice! How's your project going?", "Let me know if you need any help."]
};

const MessageDetail: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const user = users.find(user => user.id === parseInt(userId || ""));
  
  return (
    <VStack spacing={4} p={4}>
      {user ? (
        <>
          <Avatar src={user.avatar} />
          <Text fontSize="lg" fontWeight="bold">{user.name}</Text>
          <Box>
            {messages[parseInt(userId || "")].map((message, index) => (
              <Text key={index}>{message}</Text>
            ))}
          </Box>
        </>
      ) : (
        <Text>No user selected</Text>
      )}
    </VStack>
  );
};

export default MessageDetail;
