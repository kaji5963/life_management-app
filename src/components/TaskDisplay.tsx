import { Button, Flex, Input, Stack } from "@chakra-ui/react";
import React, { memo } from "react";
import { Tasks } from "../types/taskType";

type Props = {
  tasks: Tasks[];
  handleChangeValue: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleDeleteTask: (id: string) => void;
};

export const TaskDisplay = memo(
  ({ tasks, handleChangeValue, handleDeleteTask }: Props) => {
    return (
      <Stack spacing={8}>
        {tasks.map((task) => {
          return (
            <Flex key={task.id} justifyContent="center">
              <Input
                w="50vh"
                mr={5}
                variant="flushed"
                value={task.title}
                onChange={(e) => handleChangeValue(e, task.id)}
              />
              <Button
                onClick={() => handleDeleteTask(task.id)}
                size="sm"
                colorScheme="red"
              >
                削除
              </Button>
            </Flex>
          );
        })}
      </Stack>
    );
  }
);
