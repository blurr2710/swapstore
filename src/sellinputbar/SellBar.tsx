import React from 'react'
import { Flex, InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';

export const SellBar = () => {
  return (
    <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
    <InputGroup>
        <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={14}
        />
        <InputRightElement>
            <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg={"transparent"}
            >
                Post
            </Button>
        </InputRightElement>
    </InputGroup>
</Flex>  )
}
