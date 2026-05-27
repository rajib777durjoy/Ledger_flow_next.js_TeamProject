export default function DashboardNavbar() {
  return (
    <header className="h-16 border-b border-gray-800 bg-[#08142c] flex items-center justify-between px-6">
      <div>
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#12213f] border border-gray-700 px-4 py-2 rounded-lg outline-none"
        />

        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-semibold">
          M
        </div>
      </div>
    </header>
  );
}