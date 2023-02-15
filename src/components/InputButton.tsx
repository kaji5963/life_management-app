import { Flex, Input } from "@chakra-ui/react";
import React, { memo } from "react";
import { PrimaryButton } from "./button/PrimaryButton";

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleCreateTask: () => void;
};

export const InputButton = memo(
  ({ text, setText, handleCreateTask }: Props) => {
    return (
      <Flex justifyContent="center" my={10}>
        <Input
          placeholder="ここに入力してください"
          variant="filled"
          w="70vh"
          mr={5}
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <PrimaryButton onClick={handleCreateTask} colorScheme="blue">
          追加
        </PrimaryButton>
      </Flex>
    );
  }
);
