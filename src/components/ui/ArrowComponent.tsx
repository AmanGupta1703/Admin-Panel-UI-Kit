import { arrowDownPoints } from "../../utils";

type TArrowComponent = {
  size: number;
  polygonPoints?: string;
};

const ArrowComponent = ({ size, polygonPoints = arrowDownPoints }: TArrowComponent) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h48v48H0z" fill="none" />
    <g id="Shopicon">
      <polygon points={polygonPoints} />
    </g>
  </svg>
);

export default ArrowComponent;
