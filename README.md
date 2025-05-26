# Admin Panel

A modern, responsive admin panel built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This project demonstrates a modular approach to building a dashboard UI with a chat interface, sidebar navigation, and details panel.

> **Note:**  
> This admin panel is currently a static UI prototype. There is no backend integration or interactive functionality implemented yet. All data is hardcoded for demonstration purposes.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)
- [Component Overview](#component-overview)
- [Customization](#customization)

---

## Features

- ⚡️ Fast development with Vite and HMR
- 📦 Modular React components (Sidebar, Chat, Details)
- 🎨 Styled with Tailwind CSS and Inter font
- 🧩 TypeScript for type safety
- 🗂️ Organised folder structure for scalability
- 🧹 ESLint for code quality

---

## Project Structure

```
src/
  App.tsx                # Main app entry, renders DashboardLayout
  main.tsx               # ReactDOM root, entry point for Vite
  index.css              # Tailwind CSS and global styles
  vite-env.d.ts          # Vite/TypeScript environment types

  components/
    Chat/                # Chat window and related components
    Details/             # Details panel components (ticket meta, user data, notes, etc.)
    Layout/              # Main layout components (Sidebar, ChatWindow, DetailsPanel)
    Sidebar/             # Sidebar navigation and search components
    ui/                  # Reusable UI components (Button, Icons, NavItem, etc.)

  utils/
    index.ts             # Static data and utility constants for navigation, chat, etc.
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/AmanGupta1703/Admin-Panel-UI-Kit
   cd admin-panel
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view the app.

---

## Available Scripts

- `npm run dev` – Start the Vite development server
- `npm run build` – Build the app for production (TypeScript + Vite)
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint on the project

---

## Tech Stack

- **React** (with functional components and hooks)
- **TypeScript**
- **Vite** (for fast builds and HMR)
- **Tailwind CSS** (utility-first styling)
- **ESLint** (with recommended React/TypeScript configs)

---

## Component Overview

### Layout

- [`DashboardLayout`](src/components/Layout/DashboardLayout.tsx): Main layout, includes Sidebar, ChatWindow, and DetailsPanel.
- [`Sidebar`](src/components/Layout/Sidebar.tsx): Left navigation with search, nav links, teams, teammates, and views.
- [`ChatWindow`](src/components/Layout/ChatWindow.tsx): Main chat area, includes conversation list and chat threads.
- [`DetailsPanel`](src/components/Layout/DetailsPanel.tsx): Right panel with ticket meta, user data, recent conversations, and notes.

### Chat

- [`Chat`](src/components/Chat/Chat.tsx): Chat thread area with header and messages.
- [`ChatHeader`](src/components/Chat/ChatHeader.tsx): Actions for the current chat.
- [`ConversationThreadList`](src/components/Chat/ConversationThreadList.tsx): List of chat messages (sender/receiver).
- [`SenderMessage`](src/components/Chat/SenderMessage.tsx): Message bubble for sender.
- [`ReceiverMessage`](src/components/Chat/ReceiverMessage.tsx): Message bubble for receiver.
- [`MessageList`](src/components/Chat/MessageList.tsx): List of conversations in the chat list.
- [`MessageItem`](src/components/Chat/MessageItem.tsx): Single conversation preview.

### Details

- [`TicketMeta`](src/components/Details/TicketMeta.tsx): Ticket status, assignee, team, and priority.
- [`UserData`](src/components/Details/UserData.tsx): User info (name, company, location, email).
- [`RecentConversations`](src/components/Details/RecentConversations.tsx): List of recent conversations.
- [`UserNotes`](src/components/Details/UserNotes.tsx): Notes about the user.

### Sidebar

- [`SidebarHeader`](src/components/Sidebar/SidebarHeader.tsx): Title and new note icon.
- [`SearchBox`](src/components/Sidebar/SearchBox.tsx): Search input.
- [`NavLinks`](src/components/Sidebar/NavLinks.tsx): Main navigation links.
- [`TeamList`](src/components/Sidebar/TeamList.tsx): Team navigation.
- [`TeammateList`](src/components/Sidebar/TeammateList.tsx): Teammate navigation.
- [`ViewList`](src/components/Sidebar/ViewList.tsx): Views navigation.

### UI

- [`Button`](src/components/ui/Button.tsx): Reusable button component.
- [`NavItem`](src/components/ui/NavItem/NavItem.tsx): Sidebar navigation item.
- [`ArrowComponent`](src/components/ui/ArrowComponent.tsx): SVG arrow icon.
- [`DotsIcon`](src/components/ui/DotsIcon.tsx): Dots icon for actions.
- [`SnoozeIcon`](src/components/ui/SnoozeIcon.tsx): Snooze icon.
- [`Message`](src/components/ui/Message.tsx): Message bubble for chat.

---

## Customization

- **Data:** All navigation items, chat messages, and user data are defined in [`src/utils/index.ts`](src/utils/index.ts).
- **Styling:** Tailwind CSS is used throughout. You can customise styles in [`src/index.css`](src/index.css).
- **Icons:** Emoji and SVG icons are used for simplicity and can be replaced as needed.

---
