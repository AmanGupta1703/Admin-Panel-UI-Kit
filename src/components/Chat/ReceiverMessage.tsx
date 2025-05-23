type TReceiverMessageProps = {
  avatarEmoji: string;
  messages: string[];
  time: string;
  seen: boolean;
};

const ReceiverMessage = ({ avatarEmoji, messages, time, seen }: TReceiverMessageProps) => {
  return (
    <li className="flex space-x-2 self-end max-lg:w-3/4">
      <div className="bg-blue-200 p-2 rounded-md max-lg:p-1.5">
        {messages.map((message) => (
          <p key={message} className="text-gray-900 text-sm max-lg:text-xs">
            {message}
          </p>
        ))}

        <div className="flex space-x-2 items-center justify-end mt-2">
          <span className="text-xs text-gray-500 max-lg:text-[9px]">{seen ? "Seen" : ""}</span>
          <span className="text-xs text-gray-500 max-lg:text-[9px]">{time}</span>
        </div>
      </div>
      <div className="self-end">
        <span className="text-xl">{avatarEmoji}</span>
      </div>
    </li>
  );
};

export default ReceiverMessage;
