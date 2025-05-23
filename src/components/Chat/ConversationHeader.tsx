type TConversationHeaderProps = {
  children: React.ReactNode;
};

const ConversationHeader = ({ children }: TConversationHeaderProps) => {
  return (
    <header className="border-b border-b-gray-100">
      <div className="p-3">{children}</div>
    </header>
  );
};

export default ConversationHeader;
