import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { Home } from "../Components/Home";

export const AppMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
