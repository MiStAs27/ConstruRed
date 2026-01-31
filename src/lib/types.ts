export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
};

export type Skill = string;

export type Certification = {
  id: string;
  name: string;
  issuingBody: string;
  issueDate: string;
  status: 'Verified' | 'Pending' | 'Rejected';
};

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type Professional = User & {
  role: string;
  location: string;
  about: string;
  skills: Skill[];
  certifications: Certification[];
  portfolio: PortfolioItem[];
  rating: number;
  reviewsCount: number;
};

export type Project = {
  id: string;
  name: string;
  clientName: string;
  clientId: string;
  description: string;
  location: string;
  budget: string;
  postedDate: string;
  status: 'Open' | 'In Progress' | 'Completed';
  requiredSkills: Skill[];
};

export type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
};

export type Conversation = {
  id: string;
  participant: User;
  messages: Message[];
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
};

export type CertificationVerification = {
  id: string;
  professionalId: string;
  professionalName: string;
  professionalAvatarUrl: string;
  certificationName: string;
  submittedDate: string;
  status: 'Pending' | 'Verified' | 'Rejected';
};
