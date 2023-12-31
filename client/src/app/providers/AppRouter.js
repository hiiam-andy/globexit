import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import { PAGE_MAIN, PAGE_TASK } from "../../shared/constants/constants";
import TaskPage from "../../pages/TaskPage/TaskPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={PAGE_MAIN} element={<MainPage />} />
      <Route path={PAGE_TASK} element={<TaskPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
