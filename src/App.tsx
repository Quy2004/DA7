import { Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage/MenuPage";
import WebsiteLayout from "./pages/Layout/WebsiteLayout";
import ChuyenNhaPage from "./pages/ChuyenNhaPage/ChuyenNha";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css"
function App() {
  return (
    <Routes>
      <Route path="" element={<WebsiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="chuyennha" element={<ChuyenNhaPage />} />
      </Route>
    </Routes>
  );
}
export default App
