import { conversationsData } from "./../../utils";

import { MessageItem } from "./";

const MessageList = () => {
  return (
    <ul className="flex flex-col space-y-1.5 p-3">
      {conversationsData.map((conversation) => (
        <MessageItem key={conversation.name} {...conversation} />
      ))}
    </ul>
  );
};

export default MessageList;
