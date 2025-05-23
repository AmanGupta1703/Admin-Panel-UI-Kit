import { TicketMeta, UserData, RecentConversations, UserNotes } from "../Details";

const DetailsPanel = () => {
  return (
    <section className="bg-white w-40 sm:w-48 md:w-56 lg:w-64 xl:w-80 border-l border-l-gray-100">
      <TicketMeta />
      <UserData />
      <RecentConversations />
      <UserNotes />
    </section>
  );
};

export default DetailsPanel;
