import { teamNavItems } from "../../utils";

import { NavItem } from "../ui";

const TeamList = () => {
  return (
    <div className="p-2.5">
      <h2 className="uppercase text-xs text-gray-800 font-bold tracking-wide">Teams</h2>

      <ul className="space-y-1 mt-1">
        {teamNavItems.map((teamNavItem) => (
          <NavItem key={teamNavItem.label} {...teamNavItem} />
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
