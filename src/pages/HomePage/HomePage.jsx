import React from 'react'
import { VStack, Box, Text } from '@chakra-ui/react';
import { SideNavBar } from '../../sidenav/SideNavBar';
const Homepage = () => {
  return (
    <Box display="flex" flexDirection={{ lg: 'row' }} w="100%" h="100vh">
      {/* VStack A */}
      <SideNavBar/>

      {/* VStack B */}
      <VStack
        flex={{ base: 1, lg: 2 }}
        bg="blue.200"
        justify="center"
        align="center"
        p={4}
        w={{ lg: '50%' }}
      >
        <Text fontSize="xl">VStack B</Text>
      </VStack>

      {/* VStack C */}
      <VStack
        display={{ base: 'none', lg: 'flex' }}
        flex={1}
        bg="green.200"
        justify="center"
        align="center"
        p={4}
      >
        <Text fontSize="xl">VStack C</Text>
      </VStack>
    </Box>
  )
}

export default Homepage