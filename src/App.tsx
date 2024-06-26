import { Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage/MenuPage";
import WebsiteLayout from "./pages/Layout/WebsiteLayout";
import ChuyenNhaPage from "./pages/ChuyenNhaPage/ChuyenNha";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css"
import CoffeHolicTab from "./pages/ChuyenNhaPage/Tabs/CoffeeHome";
import AllHomes from "./pages/ChuyenNhaPage/Tabs/AllHomes";
import TeaHolicTab from "./pages/ChuyenNhaPage/Tabs/TeaHomes";
import BlogTab from "./pages/ChuyenNhaPage/Tabs/BlogHomes";
import AllSideBar from "./pages/MenuPage/SideBar/AllSide";
import TeaSideBar from "./pages/MenuPage/SideBar/TeaSideBar";
// import AllHomes from "./pages/ChuyenNhaPage/Tabs/AllHomes";
// import "./pages/HomePage/HomePage.css"
function App() {
  return (
    <Routes>
      <Route path="" element={<WebsiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="menu" element={<MenuPage />}>
          <Route path="" element={<AllSideBar />} />
          <Route path="teaside" element={<TeaSideBar />} />
        </Route>
        <Route path="chuyennha" element={<ChuyenNhaPage />}>
          <Route path="" element={<AllHomes />} />
          <Route path="coffeeholic" element={<CoffeHolicTab />} />
          <Route path="teaholic" element={<TeaHolicTab />} />
          <Route path="blog" element={<BlogTab />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default App
