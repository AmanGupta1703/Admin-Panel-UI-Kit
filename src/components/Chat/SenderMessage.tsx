import { Message } from "./../ui";

type TSenderMessageProps = {
  avatarEmoji: string;
  messages: string[];
  time: string;
};

const SenderMessage = ({ avatarEmoji, messages, time }: TSenderMessageProps) => {
  return (
    <li className="flex space-x-2 self-start">
      <div className="self-end">
        <span className="text-xl">{avatarEmoji}</span>
      </div>

      <div className="flex flex-col space-y-1">
        {messages.map((message, index) => (
          <Message key={message} messages={messages} message={message} index={index} time={time} />
        ))}
      </div>
    </li>
  );
};

export default SenderMessage;
