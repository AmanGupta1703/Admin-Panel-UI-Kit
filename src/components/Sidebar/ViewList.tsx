import { viewNavItems } from "../../utils";

import { NavItem } from "../ui";

const ViewList = () => {
  return (
    <div className="p-2.5">
      <h2 className="uppercase text-xs text-gray-800 font-bold tracking-wide">views</h2>

      <ul className="space-y-1 mt-1">
        {viewNavItems.map((viewNavItem) => (
          <NavItem key={viewNavItem.label} {...viewNavItem} />
        ))}
      </ul>
    </div>
  );
};

export default ViewList;
