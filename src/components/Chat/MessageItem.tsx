type TessageItemProps = {
  name: string;
  message: string;
  time: string;
  avatarEmoji: string;
  unread?: boolean;
  isActive: boolean;
};

const MessageItem = ({ name, message, time, avatarEmoji, unread, isActive }: TessageItemProps) => {
  return (
    <li
      className={`flex justify-between transition p-3 rounded-md cursor-pointer hover:bg-gray-100 ${
        isActive ? "bg-gray-100" : ""
      }`}>
      <div className="flex space-x-2">
        <div className="h-4 w-4 flex items-center justify-center text-white rounded-full ">
          {avatarEmoji}
        </div>

        <div className="flex flex-col">
          <h3 className={`text-xs text-gray-400 ${unread ? "font-bold text-gray-900" : ""}`}>
            {name}
          </h3>
          <p className={`text-xs text-gray-400 ${unread ? "font-bold text-gray-900" : ""}`}>
            {message}
          </p>
        </div>
      </div>

      <span className="capitalize text-xs text-gray-500 self-end">{time}</span>
    </li>
  );
};

export default MessageItem;
