import { ConversationHeader, ConversationFilters, MessageList, Chat } from "../Chat";

const ChatWindow = () => {
  return (
    <section className="bg-gray-50 flex-1/2">
      <article className="flex h-full">
        {/* Chat List */}
        <div className="w-56 min-w-0 border-r border-r-gray-100 max-sm:w-50 max-lg:w-50">
          <ConversationHeader>
            <h2 className="text-gray-800 font-bold tracking-wide">VIP Inbox</h2>
          </ConversationHeader>

          <ConversationFilters />
          <MessageList />
        </div>

        {/* Chats */}
        <div className="flex-1 min-w-0 w-full sm:w-auto max-lg:w-70">
          <Chat />
        </div>
      </article>
    </section>
  );
};

export default ChatWindow;
