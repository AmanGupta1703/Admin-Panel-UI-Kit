import { Sidebar, ChatWindow, DetailsPanel } from "./";

const DashboardLayout = () => {
  return (
    <main className="w-full h-screen flex bg-indigo-400 font-inter">
      <Sidebar />
      <ChatWindow />
      <DetailsPanel />
    </main>
  );
};

export default DashboardLayout;
