import { detailsData } from "../../utils";

const TicketMeta = () => {
  return (
    <article className="">
      <div className="py-2.5 flex items-center justify-between border-b-2 border-b-gray-100">
        <h2 className="text-base text-gray-900 font-medium px-3 tracking-wide max-lg:text-xs">
          Details
        </h2>
        <span className="cursor-pointer px-3 text-gray-950 text-xl font-bold transition-colors duration-150 hover:text-red-500 hover:bg-gray-100 rounded max-lg:text-xs">
          &times;
        </span>
      </div>

      <div className="p-3 w-5/6">
        <div className="flex flex-col space-y-2">
          {detailsData.map((detail) => (
            <div key={detail.label} className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{detail.label}</span>
              {detail.type === "badge" ? (
                <span className="bg-blue-600 text-white block text-xs py-1 px-2 py- rounded-full">
                  {detail.value}
                </span>
              ) : detail.type === "textWithIcon" ? (
                <>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">{detail?.icon}</span>
                    <span className="block text-gray-800 font-medium text-xs hover:text-blue-600 hover:underline cursor-pointer transition-colors duration-">
                      {detail?.value}
                    </span>
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default TicketMeta;
