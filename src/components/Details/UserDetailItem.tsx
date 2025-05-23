type TUserDetailItemProps = {
  label: string;
  value: string;
  icon: string;
};

const UserDetailItem = ({ label, value, icon }: TUserDetailItemProps) => {
  return (
    <div className="flex items-center justify-between w-5/6">
      <div className="flex items-center space-x-2">
        <span className="text-xs">{icon}</span>
        <span className="text-xs text-gray-400">{label}</span>
      </div>

      <span className="text-gray-700 text-xs font-medium tracking-wide">{value}</span>
    </div>
  );
};

export default UserDetailItem;
