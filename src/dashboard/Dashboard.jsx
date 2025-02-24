import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
      return (
            <div className="font-bodyFont">
                  <div className="flex w-full">
                        {/* Side bar */}
                        <div>
                              <div className="border-r-2 border-gray-300 md:w-[18%] min-h-screen fixed px-4 py-4">
                                    <Sidebar />
                              </div>
                        </div>
                        {/* Content Section */}
                        <div className="flex-1 pr-10 py-4 md:ml-[20%] ml-20">
                              <Outlet />
                        </div>
                  </div>
            </div>
      );
};

export default Dashboard;