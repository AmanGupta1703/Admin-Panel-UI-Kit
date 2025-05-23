import { conversationActions } from "./../../utils";

import type { TButtonType } from "../ui/Button";

import { Button } from "../ui";

const ChatHeader = () => {
  return (
    <header className="flex items-center justify-between p-2 px-5 border-b border-b-gray-100">
      <h2 className="text-gray-800 text-sm font-bold">Hailey Garza</h2>

      <div className="flex items-center space-x-2.5">
        {conversationActions.map((action) => (
          <Button
            ariaLabel={action.ariaLabel}
            type={action.type as TButtonType}
            padding="py-1 px-2"
            icon={action.icon}
            textContent={action.label}
            key={action.label}
          />
        ))}
      </div>
    </header>
  );
};

export default ChatHeader;
