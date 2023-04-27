interface TechSupportTicket {
  id: string;
  title: string;
  description: string;
  dateCreated: Date;
  status: TechSupportTicketStatus;
  priority: TechSupportTicketPriority;
  category: TechSupportTicketCategory;
  createdBy: string;
  assignedTo?: string;
  comments: TechSupportTicketComment[];
}

interface TechSupportTicketComment {
  id: string;
  text: string;
  author: string;
  dateCreated: Date;
}

enum TechSupportTicketStatus {
  OPEN = "open",
  IN_PROGRESS = "in progress",
  RESOLVED = "resolved",
  CLOSED = "closed",
}

enum TechSupportTicketPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  URGENT = "urgent",
}

enum TechSupportTicketCategory {
  NETWORK = "network",
  SOFTWARE = "software",
  HARDWARE = "hardware",
  OTHER = "other",
}
