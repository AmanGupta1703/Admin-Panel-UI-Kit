type TMessageProps = {
  messages: string[];
  message: string;
  index: number;
  time: string;
};

const Message = ({ messages, message, index, time }: TMessageProps) => {
  return (
    <p
      className={`bg-gray-200 text-gray-900 p-2 rounded-md ${
        (index + 1) % 2 !== 0 ? "rounded-bl-none" : "rounded-tl-none"
      }  text-sm max-lg:text-xs`}>
      {message}
      {index === messages.length - 1 && (
        <span className="block text-xs mt-2 text-gray-500">{time}</span>
      )}
    </p>
  );
};

export default Message;
