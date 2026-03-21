"use client";

import { usePortal } from "@/hooks/portal/use-portal";
import { PortalSidebar } from "@/components/portal/sidebar";
import { ChatView } from "@/components/portal/chat-view";
import { SettingsModal } from "@/components/portal/settings-modal";

export default function PortalHomePage() {
  const clientName = "João";
  const clientInitials = "JS";

  const {
    currentView,
    ticketStatus,
    activeTicketTitle,
    isSettingsOpen,
    setIsSettingsOpen,
    messages,
    activeTickets,
    closedTickets,
    handleNewTicket,
    handleOpenActiveTicket,
    handleOpenClosedTicket,
    handleSendMessage,
    handleLogout,
  } = usePortal(clientName);

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      <PortalSidebar
        clientName={clientName}
        clientInitials={clientInitials}
        currentView={currentView}
        activeTicketTitle={activeTicketTitle}
        activeTickets={activeTickets}
        closedTickets={closedTickets}
        onNewTicket={handleNewTicket}
        onOpenActiveTicket={handleOpenActiveTicket}
        onOpenClosedTicket={handleOpenClosedTicket}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onLogout={handleLogout}
      />

      <ChatView
        currentView={currentView}
        ticketStatus={ticketStatus}
        activeTicketTitle={activeTicketTitle}
        clientName={clientName}
        clientInitials={clientInitials}
        messages={messages}
        onSendMessage={handleSendMessage}
        onNewTicket={handleNewTicket}
      />

      <SettingsModal
        open={isSettingsOpen}
        onOpenChange={setIsSettingsOpen}
        clientName={clientName}
        clientInitials={clientInitials}
      />
    </div>
  );
}
