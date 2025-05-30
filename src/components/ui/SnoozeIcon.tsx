type TSnoozeIconProps = {
  size: number;
  className?: string;
};

const SnoozeIcon = ({ size, className = "" }: TSnoozeIconProps) => (
  <svg
    fill="#000000"
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <path d="M9.5,20h4a2,2,0,0,1-4,0Zm10-11H17.914l2.293-2.293A1,1,0,0,0,19.5,5h-4a1,1,0,0,0,0,2h1.586L14.793,9.293A1,1,0,0,0,15.5,11h4a1,1,0,0,0,0-2Zm-2,4h-2a3,3,0,0,1-2.235-5,2.974,2.974,0,0,1-.184-3.757A5.969,5.969,0,0,0,12.5,4.09V3a1,1,0,0,0-2,0V4.09A6,6,0,0,0,5.5,10v6l-2,2h16l-2-2Z" />
  </svg>
);
export default SnoozeIcon;
