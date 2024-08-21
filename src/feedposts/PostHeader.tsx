import React from "react";
import { motion } from "framer-motion";

import { Flex, Link, Avatar, SkeletonCircle, Skeleton, Box, Button } from "@chakra-ui/react";

const PostHeader = ({ post }) => {

	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} my={2}>
			<Flex alignItems={"center"} gap={2}>
					<SkeletonCircle size='10' />
				<Flex fontSize={12} fontWeight={"bold"} gap='2'>
						<Skeleton w={"100px"} h={"10px"} />
					<Box color={"gray.500"}>• 20s</Box>
				</Flex>
			</Flex>
			<Box cursor={"pointer"}>
				Location
			</Box>
		</Flex>
	);
};

export default PostHeader;