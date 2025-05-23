export type TButtonType = "light" | "dark";

type TButtonProps = {
  ariaLabel: string;
  type?: TButtonType;
  textContent?: string;
  padding?: string;
  icon: string;
};

const Button = ({ ariaLabel, type = "light", textContent, padding, icon }: TButtonProps) => {
  const buttonColor =
    type === "light"
      ? "text-gray-800 bg-gray-200 hover:bg-gray-300"
      : "bg-gray-800 text-white hover:bg-gray-900";

  return (
    <button
      aria-label={ariaLabel}
      className={`cursor-pointer ${padding} rounded-lg flex items-center space-x-1.5 ${buttonColor} transition-colors`}>
      <span className="max-lg:text-xs">{type === "light" ? <>{icon}</> : <>&times;</>}</span>
      {textContent && <span className="text-xs">{textContent}</span>}
    </button>
  );
};

export default Button;
