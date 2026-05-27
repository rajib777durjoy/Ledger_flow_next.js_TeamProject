import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#071028] text-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <DashboardNavbar />

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}