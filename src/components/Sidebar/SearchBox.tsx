type TMagnifyGlassIconProps = {
  size: number;
  className?: string;
};

const MagnifyGlassIcon = ({ size, className = "" }: TMagnifyGlassIconProps) => (
  <svg
    width={`${size}`}
    height={`${size}`}
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="7" stroke="black" strokeWidth="2" />
    <line
      x1="14.2929"
      y1="14.7071"
      x2="18"
      y2="18.4142"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SearchBox = () => {
  return (
    <div className="flex space-x-2 p-2.5">
      <MagnifyGlassIcon className="self-center h-4 w-4 text-gray-400" size={14} />
      <input
        className="rounded-sm w-full block p-1.5 text-gray-900 text-xs focus:bg-white focus:outline-none placeholder:text-gray-950 transition"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
