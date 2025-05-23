import { ChatHeader, ConversationThreadList } from "./";

const Chat = () => {
  return (
    <div className="flex flex-col h-full">
      <ChatHeader />
      <ConversationThreadList />
    </div>
  );
};

export default Chat;
