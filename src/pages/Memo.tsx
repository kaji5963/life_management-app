import { memo } from "react";
import { Outlet } from "react-router-dom";
import { MemoDisplay } from "../components/MemoDisplay";
import { useCrudTask } from "../hooks/useCrudTask";

export const Memo = memo(() => {
const { deleteTask } = useCrudTask();
return (
    <>
      <MemoDisplay />
    </>
  );
});
