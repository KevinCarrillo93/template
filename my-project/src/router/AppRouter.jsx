import { Route, Routes } from "react-router-dom";
import { Detail } from "../Components/Detail";
import { Home } from "../Components/Home";
import { ProductList }  from '../Components/ProductList';
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/details" element={<Detail/>} />
        <Route path="/listproducts" element={<ProductList />} />
      </Routes>
    </>
  );
};
