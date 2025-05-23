import { messages, currentUser } from "../../utils";

import { SenderMessage, ReceiverMessage } from "./";

const ConversationThreadList = () => {
  return (
    <ul className="p-2 pt-8 px-5 flex flex-col space-y-4 max-lg:overflow-y-scroll h-full">
      {messages.map((message) => {
        const isCurrentUser = message.from === currentUser;
        return !isCurrentUser ? (
          <SenderMessage key={message.id} {...message} />
        ) : (
          <ReceiverMessage key={message.id} {...message} />
        );
      })}
    </ul>
  );
};

export default ConversationThreadList;
