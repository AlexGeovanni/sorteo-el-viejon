
export type Giveaway = {
  _id: string;
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
  ticket_duration: number; // Duration in days for ticket sales
  created_by: string; // User ID of the creator
  limit: number; // Total number of tickets available
}