import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { taskState } from "../globalStates/taskState";
import { Tasks } from "../types/taskType";
import { useMessage } from "./useMessage";

//taskのCRUD処理をするカスタムフック
export const useCrudTask = () => {
  const [text, setText] = useState<string>("");

  // const [tasks, setTasks] = useState<Tasks[]>([]);
  const [tasks, setTasks] = useRecoilState<Tasks[]>(taskState);
  const { showMessage } = useMessage();

  //task追加処理
  const createTask = useCallback(() => {
    if (text === "")
      return showMessage({ title: "何か入力してください", status: "error" });

    const addTask = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 1000).toString(16),
        title: text,
        checked: false,
      },
    ];
    setTasks(addTask);
    setText("");
    showMessage({ title: "追加しました", status: "success" });
  }, [text]);

  //task編集処理
  const updateTask = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
      const editTask = tasks.map((task) =>
        task.id === id ? { ...task, title: e.target.value } : task
      );
      setTasks(editTask);
    },
    [tasks]
  );

  //task削除処理
  const deleteTask = useCallback(
    (id: string) => {
      const filterTask = tasks.filter((task) => task.id !== id);
      setTasks(filterTask);
      showMessage({ title: "削除しました", status: "error" });
    },
    [tasks]
  );

  return {
    createTask,
    updateTask,
    deleteTask,
    text,
    setText,
    tasks,
    setTasks,
  };
};
