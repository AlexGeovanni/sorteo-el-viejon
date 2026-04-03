import { TicketsData, typeTickets } from "@/data/tickets";


/* Selects count random tickets without repeating the `numero` property */
export function selectRandomTickets(tickets: typeTickets[], count: number = 6): typeTickets[] {
  if (count > tickets.length) {
    throw new Error("The number of tickets to select cannot exceed the available tickets.");
  }

  const selectedTickets: typeTickets[] = [];
  const selectedNumbers: Set<string> = new Set();

  while (selectedTickets.length < count) {
    const index = Math.floor(Math.random() * tickets.length);
    const ticket = tickets[index];

    if (!selectedNumbers.has(ticket.numero)) {
      selectedNumbers.add(ticket.numero);
      selectedTickets.push(ticket);
    }
  }

  return selectedTickets;
}


export const ticketsDataMerge = TicketsData.map((ticket) => ({
      ...ticket,
      select: false,
    }))