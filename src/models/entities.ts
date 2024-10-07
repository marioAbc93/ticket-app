export type Ticket = {
  id: number;
  full_name: string;
  customer_mail: string;
  event_id: number;
  event_name: string;
  qr_code: string;
};

export type TicketResponse = {
  message: string;
  tickets: Ticket[];
  total_pages: number;
  total_tickets: number;
  current_page: number;
};

export type Event = {
  id: number;
  name: string;
  description: string;
  date: string;
  ticket_value: number;
  available_tickets: number;
};

export type EventResponse = {
  message: string;
  events: Event[];
  total_pages: number;
  total_tickets: number;
  current_page: number;
};

export type Sale = {
  ticket_id: number;
  event_id: number;
};

export type EventName = {
  id: number;
  name: string;
  ticket_value: number;
};

export type AvailableEventSummaryItem = {
  id: number;
  name: string;
  available_tickets: number;
};

export type EventNameResponse = {
  message: string;
  events: EventName[];
};

export type AvailableEventSummaryResponse = {
  message: string;
  total_events: number;
  soldout_events: number;
  events_with_available_tickets: AvailableEventSummaryItem[];
  available_events: number;
};
