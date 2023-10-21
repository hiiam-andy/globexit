import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fetchUsers } from "./store/mainPageSliced";
import AppRouter from "./providers/AppRouter";
import Header from "../widgets/Header/Header";
import "./styles/styles.css";

const App = () => {
  const dispatch = useDispatch();
  let name = useSelector((state) => state.users.name);

  useEffect(() => {
    dispatch(fetchUsers(name));
  }, [dispatch, name]);

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
