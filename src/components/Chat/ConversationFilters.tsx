import { ArrowComponent } from "../ui";

type TFilterDropdownTriggerProps = {
  label: string;
};

const FilterDropdownTrigger = ({ label }: TFilterDropdownTriggerProps) => {
  return (
    <div className="flex items-center space-x-1 cursor-pointer">
      <span
        className="text-gray-900 text-xs font-semibold transition-colors 
      duration-200 hover:text-blue-600 hover:bg-gray-100 px-1 rounded">
        {label}
      </span>
      <ArrowComponent size={14} />
    </div>
  );
};

const ConversationFilters = () => {
  return (
    <div className="flex items-center justify-between p-3">
      <FilterDropdownTrigger label="8 open" />
      <FilterDropdownTrigger label="Priority first" />
    </div>
  );
};

export default ConversationFilters;
