export const mainNavItems = [
  { label: "Your Inbox", icon: "📥", count: 22, isActive: false },
  { label: "Mentions", icon: "🔔", count: 0, isActive: false },
  { label: "All", icon: "📂", count: 421, isActive: false },
  { label: "Unassigned", icon: "❓", count: 0, isActive: false },
  { label: "Dashboard", icon: "📊", isActive: false },
];

export const teamNavItems = [
  { label: "VIP Inbox", icon: "⚠️", count: 8, isActive: true },
  { label: "EMEA Waiting", icon: "🕐", count: 155, isActive: false },
  { label: "UK Waiting", icon: "🛠️", count: 39, isActive: false },
];

export const teammateNavItems = [
  { label: "Bella Adams", icon: "👩‍💼", count: 155, isActive: false },
  { label: "Chris Richards", icon: "🧑‍💼", count: 39, isActive: false },
  { label: "David Lee", icon: "👨‍💼", count: 129, isActive: false },
];

export const viewNavItems = [
  { label: "Apps & Integrations", icon: "🔌", count: 15, isActive: false },
  { label: "Social queries", icon: "💬", count: 535, isActive: false },
];

export const detailsData = [
  {
    label: "State",
    value: "Open",
    type: "badge",
    badgeColor: "blue",
  },
  {
    label: "Assignee",
    value: "June Jensen",
    type: "textWithIcon",
    icon: "👩",
  },
  {
    label: "Team",
    value: "VIP Inbox",
    type: "textWithIcon",
    icon: "⚠️",
  },
  {
    label: "Priority",
    value: "Not priority",
    type: "textWithIcon",
    icon: "⭐",
  },
];

export const userData = [
  {
    label: "Name",
    value: "Hailey Garza",
    icon: "👤",
  },
  {
    label: "Company",
    value: "Acme Inc.",
    icon: "🏢",
  },
  {
    label: "Location",
    value: "San Jose, CA",
    icon: "📍",
  },
  {
    label: "Email",
    value: "hailey@acme.com",
    icon: "📧",
  },
];

export const arrowDownPoints =
  "24,29.172 9.414,14.586 6.586,17.414 24,34.828 41.414,17.414 38.586,14.586";
export const arrowUpPoints =
  "6.586,30.586 9.414,33.414 24,18.828 38.586,33.414 41.414,30.586 24,13.172";

export const recentConversations = [
  {
    senderInitial: "H",
    started: "10 days ago",
    message: "Let me take a look on how…",
    status: "Open",
    timeAgo: "1d",
  },
  {
    senderInitial: "H",
    started: "3 months ago",
    message: "Thanks for your help!",
    status: "Closed",
    timeAgo: "3mo",
  },
];

export const userNotes = [
  {
    author: "A",
    date: "10 days ago",
    note: "Followed up with user about the issue.",
    read: false,
  },
  {
    author: "B",
    date: "3 days ago",
    note: "Waiting for user response.",
    read: false,
  },
];

export const conversationsData = [
  {
    name: "Hailey Garza",
    message: "Hi Hailey. Let me...",
    time: "Now",
    unread: false,
    avatarEmoji: "👩‍💼",
    isActive: true,
  },
  {
    name: "Ivan Deen",
    message: "Hi, I have a quest...",
    time: "8min",
    unread: false,
    avatarEmoji: "👨‍💻",
    isActive: false,
  },
  {
    name: "Jason Shaw",
    message: "Is the app down?",
    time: "12min",
    unread: false,
    avatarEmoji: "🧑🏽‍🔧",
    isActive: false,
  },
  {
    name: "Robin Benson",
    message: "Could you point m...",
    time: "2min",
    unread: true,
    avatarEmoji: "🧔🏻",
    isActive: false,
  },
  {
    name: "Carla Fité",
    message: "I created a new page...",
    time: "1min",
    unread: false,
    avatarEmoji: "👩🏻‍🎨",
    isActive: false,
  },
  {
    name: "Lucy Yoon",
    message: "This started happ...",
    time: "1min",
    unread: false,
    avatarEmoji: "👩🏼",
    isActive: false,
  },
];

export const conversationActions = [
  {
    label: "",
    icon: "⋯",
    type: "light",
    ariaLabel: "More actions",
  },
  {
    label: "Snooze",
    icon: "😴",
    type: "light",
    ariaLabel: "Snooze conversation",
  },
  {
    label: "Close",
    icon: "🛑",
    type: "dark",
    ariaLabel: "Close conversation",
  },
];

export const currentUser = "June Jensen";

export const messages = [
  {
    id: 1,
    from: "Hailey Garza",
    avatarEmoji: "👩",
    messages: ["Hi, my credit card isn't working.", "I get an error when I try to add it."],
    time: "5min",
    seen: false,
  },
  {
    id: 2,
    from: "June Jensen",
    avatarEmoji: "👩🏼‍💻",
    messages: ["Hi Hailey. Let me check if I can add it for you on my end."],
    time: "Now",
    seen: true,
  },
  {
    id: 3,
    from: "June Jensen",
    avatarEmoji: "👩🏼‍💻",
    messages: [
      "Could you please confirm the last 4 digits of your card?",
      "It’ll help me verify the issue.",
    ],
    time: "Just now",
    seen: true,
  },
  {
    id: 4,
    from: "Hailey Garza",
    avatarEmoji: "👩",
    messages: ["Sure, it's 1234."],
    time: "1min",
    seen: false,
  },
  {
    id: 5,
    from: "June Jensen",
    avatarEmoji: "👩🏼‍💻",
    messages: [
      "Thanks! I’ve manually added the card on your behalf.",
      "You should be good to go now.",
    ],
    time: "Now",
    seen: true,
  },
  {
    id: 6,
    from: "Hailey Garza",
    avatarEmoji: "👩",
    messages: ["It works now. Thanks a lot for your help! 😊"],
    time: "Just now",
    seen: false,
  },
  {
    id: 7,
    from: "June Jensen",
    avatarEmoji: "👩🏼‍💻",
    messages: ["You're welcome! Let me know if anything else comes up. 👩🏼‍💻"],
    time: "Now",
    seen: true,
  },
];
