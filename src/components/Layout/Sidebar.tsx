import { SidebarHeader, SearchBox, NavLinks, TeamList, TeammateList, ViewList } from "./../Sidebar";

const Sidebar = () => {
  return (
    <aside className="bg-slate-100 w-40 sm:w-48 md:w-56 flex flex-col border-r border-r-gray-100">
      <SidebarHeader />
      <SearchBox />
      <NavLinks />
      <TeamList />
      <TeammateList />
      <ViewList />
    </aside>
  );
};

export default Sidebar;
