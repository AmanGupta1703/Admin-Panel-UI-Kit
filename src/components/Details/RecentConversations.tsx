import { useCallback, useState } from "react";

import { arrowDownPoints, arrowUpPoints, recentConversations } from "../../utils";

import { ArrowComponent } from "../ui";

const RecentConversations = () => {
  const [toOpen, setToOpen] = useState(true);

  const toggle = useCallback(() => setToOpen((prevToOpen) => !prevToOpen), []);

  return (
    <section className="border-t border-t-gray-100">
      <div className="cursor-pointer flex items-center justify-between p-3" onClick={toggle}>
        <h2 className="uppercase font-semibold text-xs">recent conversations</h2>
        <span role="button">
          <ArrowComponent polygonPoints={!toOpen ? arrowDownPoints : arrowUpPoints} size={14} />
        </span>
      </div>

      {toOpen ? (
        <article className="flex flex-col space-y-2 p-3">
          {recentConversations.map((recentConversation) => (
            <div
              key={recentConversation.started}
              className="flex items-center justify-between hover:bg-gray-50 p-1 rounded-md">
              <div className="flex space-x-2">
                <div
                  className="bg-blue-500 text-white w-3.5 h-3.5 p-3 rounded-full flex items-center
            justify-center text-xs">
                  {recentConversation.senderInitial}
                </div>

                <div>
                  <h3 className="text-xs text-gray-400">Started {recentConversation.started}</h3>
                  <p className="text-xs text-gray-500">{recentConversation.message}</p>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <span
                  className={`text-[10px] ${
                    recentConversation.status === "Open"
                      ? "bg-blue-200 text-blue-500"
                      : "bg-gray-300 text-gray-600"
                  } font-bold inline-block py-1 px-2 rounded-full`}>
                  {recentConversation.status}
                </span>
                <span className="text-sm text-gray-400 self-end">{recentConversation.timeAgo}</span>
              </div>
            </div>
          ))}
          <button className="cursor-pointer self-start text-xs text-gray-800 font-medium hover:text-blue-600 hover:underline transition-colors">
            See all
          </button>
        </article>
      ) : null}
    </section>
  );
};

export default RecentConversations;
