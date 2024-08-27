import React from 'react';
import { VStack, Text } from '@chakra-ui/react';

export const Inbox = ({  onChatClick }) => {
  return (
        <VStack spacing={20} padding={4} justify="center" width={"30%"}>
          <Text>
              messsagem1
          </Text>
          <Text>
            message2
          </Text>
          <Text>
            message3
          </Text>
        </VStack>);
};
