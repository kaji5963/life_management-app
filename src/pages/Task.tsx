import React, { memo } from "react";
import { InputButton } from "../components/InputButton";
import { TaskDisplay } from "../components/TaskDisplay";
import { useCrudTask } from "../hooks/useCrudTask";

export const Task = memo(() => {
  const { createTask, updateTask, deleteTask, text, setText, tasks } =
    useCrudTask();

  //task追加処理
  const handleCreateTask = () => {
    createTask();
  };

  //task編集処理
  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    updateTask(e, id);
  };

  //task削除処理
  const handleDeleteTask = (id: string) => {
    deleteTask(id);
  };

  return (
    <>
      <InputButton
        text={text}
        setText={setText}
        handleCreateTask={handleCreateTask}
      />

      <TaskDisplay
        tasks={tasks}
        handleChangeValue={handleChangeValue}
        handleDeleteTask={handleDeleteTask}
      />
    </>
  );
});
