import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/Home";
import { HouseHold } from "../pages/HouseHold";
import { Memo } from "../pages/Memo";
import { NotFound } from "../pages/NotFound";
import { Task } from "../pages/Task";

export const HomeRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="task" element={<Task />} />
        <Route path="house_hold" element={<HouseHold />} />
        <Route path="memo" element={<Memo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
