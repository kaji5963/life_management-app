import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../components/button/PrimaryButton";

export const Home = memo(() => {
  const navigate = useNavigate();
  return (
    <Box textAlign="center" my="16">
      <Heading as="h1" mb={10}>
        生活管理アプリ
      </Heading>
      <Flex flexFlow="column" alignItems="center" justify="center">
        <Stack spacing={6}>
          <PrimaryButton colorScheme="blue" onClick={() => navigate("task")}>
            タスク管理を始める
          </PrimaryButton>
          <PrimaryButton
            colorScheme="blue"
            onClick={() => navigate("house_hold")}
          >
            家計簿を始める
          </PrimaryButton>
          <PrimaryButton colorScheme="blue" onClick={() => navigate("memo")}>
            メモを始める
          </PrimaryButton>
        </Stack>
      </Flex>
    </Box>
  );
});
