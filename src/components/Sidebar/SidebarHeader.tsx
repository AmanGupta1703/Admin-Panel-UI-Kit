type TNewNoteIconProps = {
  size: number;
  className?: string;
};

const NewNoteIcon = ({ size = 20, className = "" }: TNewNoteIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const SidebarHeader = () => {
  return (
    <header className="flex items-center justify-between p-2.5 border-b border-b-gray-100">
      <h1 className="text-xl text-gray-900 font-semibold">Inbox</h1>
      <span
        className="cursor-pointer rounded transition-all duration-200 hover:bg-gray-200 
      hover:shadow-md active:shadow-sm active:scale-90 p-1">
        <NewNoteIcon size={22} />
      </span>
    </header>
  );
};

export default SidebarHeader;
