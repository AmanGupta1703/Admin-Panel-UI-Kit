import { useCallback, useState } from "react";

import { userData, arrowDownPoints, arrowUpPoints } from "../../utils";

import { UserDetailItem } from "./";
import { ArrowComponent } from "../ui";

const UserData = () => {
  const [toOpen, setToOpen] = useState(true);

  const toggle = useCallback(() => setToOpen((prevToOpen) => !prevToOpen), []);

  return (
    <section className="border-t border-t-gray-100">
      <div className="cursor-pointer flex items-center justify-between p-3" onClick={toggle}>
        <h2 className="uppercase font-semibold text-xs">User Data</h2>
        <span role="button">
          <ArrowComponent polygonPoints={!toOpen ? arrowDownPoints : arrowUpPoints} size={14} />
        </span>
      </div>

      {toOpen ? (
        <div className="flex flex-col space-y-3 p-3">
          {userData.map((user) => (
            <UserDetailItem key={user.label} {...user} />
          ))}
          <button className="cursor-pointer self-start text-xs text-gray-800 font-medium hover:text-blue-600 hover:underline transition-colors">
            See all
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default UserData;
