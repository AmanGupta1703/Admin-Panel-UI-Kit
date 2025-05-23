import { useCallback, useState } from "react";

import { arrowDownPoints, arrowUpPoints, userNotes } from "../../utils";

import { ArrowComponent } from "../ui";

const UserNotes = () => {
  const [toOpen, setToOpen] = useState(true);

  const toggle = useCallback(() => setToOpen((prevToOpen) => !prevToOpen), []);

  return (
    <section className="border-t border-t-gray-100 border-b border-b-gray-100">
      <div className="cursor-pointer flex items-center justify-between p-3" onClick={toggle}>
        <h2 className="uppercase font-semibold text-xs">user notes</h2>

        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold text-blue-600 bg-blue-100 rounded-full px-2 py-0.5">
            2
          </span>
          <span role="button" className="cursor-pointer">
            <ArrowComponent polygonPoints={!toOpen ? arrowDownPoints : arrowUpPoints} size={14} />
          </span>
        </div>
      </div>

      {toOpen ? (
        <div className="flex flex-col">
          {userNotes.map((userNote) => (
            <div
              key={userNote.author}
              className="flex justify-between items-start gap-3 px-4 py-3 hover:bg-gray-50 rounded-md">
              <div className="flex items-center space-x-2">
                <div className="flex h-4 w-4 p-3 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                  {userNote.author}
                </div>
                <p
                  className={`text-xs  ${
                    !userNote.read ? "font-medium text-gray-900" : "text-gray-400"
                  }`}>
                  {userNote.note}
                </p>
              </div>
              <div className="flex flex-col text-sm text-gray-800">
                <span
                  className={`self-start text-xs text-gray-500 ml-2 ${
                    !userNote.read ? "font-medium text-gray-900" : "text-gray-400"
                  }`}>
                  {userNote.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default UserNotes;
