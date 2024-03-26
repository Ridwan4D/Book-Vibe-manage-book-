import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
  return (
    <div className="px-3 max-w-7xl mx-auto">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
