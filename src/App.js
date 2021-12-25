import { Route, useLocation } from "react-router-dom";
import  AppRoutes  from "./components/AppRoutes";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";


function App() {
  const location = useLocation()
  return (
    <div className="">
      <Sidebar location={location} />
      <div className="">
        <TopNav />
        <div className="ml-[300px] ">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
