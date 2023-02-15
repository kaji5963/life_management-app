import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <Flex
        as="nav"
        bg="red.300"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ md: 3, lg: 5 }}
      >
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          <Box>
            <Link to="/">生活管理アプリ</Link>
          </Box>
        </Heading>
        <Box pr={4}></Box>

        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link to="task">タスク管理</Link>
          </Box>
          <Box pr={4}>
            <Link to="house_hold">家計簿</Link>
          </Box>
          <Box pr={4}>
            <Link to="memo">メモ</Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
