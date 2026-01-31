import type {
  Professional,
  Project,
  Message,
  Conversation,
  CertificationVerification,
} from '@/lib/types';

export const professionals: Professional[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@example.com',
    avatarUrl: 'https://picsum.photos/seed/p1/200/200',
    role: 'Master Electrician',
    location: 'San Francisco, CA',
    about:
      'With over 15 years of experience, I specialize in residential and commercial electrical systems, including smart home installations and energy-efficient upgrades. My focus is on safety, quality, and reliability.',
    skills: ['Smart Home Automation', 'EV Charger Installation', 'Panel Upgrades', 'Lighting Design'],
    certifications: [
      {
        id: 'c1',
        name: 'Licensed Master Electrician',
        issuingBody: 'State of California',
        issueDate: '2010-06-15',
        status: 'Verified',
      },
    ],
    portfolio: [
      {
        id: 'p1',
        title: 'Modern Kitchen Lighting',
        description: 'Complete overhaul of kitchen lighting system with LED strips and smart controls.',
        imageUrl: 'https://picsum.photos/seed/work1/600/400',
        imageHint: 'modern kitchen',
      },
      {
        id: 'p4',
        title: 'Smart Home Wiring',
        description: 'Structured wiring for a new construction project, enabling full home automation.',
        imageUrl: 'https://picsum.photos/seed/work4/600/400',
        imageHint: 'electrical wiring',
      },
    ],
    rating: 4.9,
    reviewsCount: 88,
  },
  {
    id: '2',
    name: 'David Lee',
    email: 'david.lee@example.com',
    avatarUrl: 'https://picsum.photos/seed/p2/200/200',
    role: 'Lead Carpenter & Builder',
    location: 'Austin, TX',
    about:
      "A third-generation carpenter with a passion for crafting beautiful and durable structures. I manage projects from framing to finish, ensuring every detail is perfect. Let's build something great together.",
    skills: ['Custom Decks', 'Framing', 'Finish Carpentry', 'Cabinet Installation'],
    certifications: [
      {
        id: 'c2',
        name: 'Certified Lead Carpenter (CLC)',
        issuingBody: 'NARI',
        issueDate: '2012-03-20',
        status: 'Verified',
      },
      {
        id: 'c3',
        name: 'OSHA 30-Hour Construction',
        issuingBody: 'OSHA',
        issueDate: '2022-01-10',
        status: 'Pending',
      },
    ],
    portfolio: [
      {
        id: 'p2',
        title: 'Redwood Deck with Pergola',
        description: 'A multi-level redwood deck designed for outdoor entertaining.',
        imageUrl: 'https://picsum.photos/seed/work2/600/400',
        imageHint: 'wood deck',
      },
    ],
    rating: 4.8,
    reviewsCount: 124,
  },
  {
    id: '3',
    name: 'Maria Garcia',
    email: 'maria.garcia@example.com',
    avatarUrl: 'https://picsum.photos/seed/p3/200/200',
    role: 'Interior & Exterior Painter',
    location: 'Miami, FL',
    about:
      "Transforming spaces with color is my specialty. I offer meticulous and high-quality painting services for both interiors and exteriors. I use only premium paints for a lasting, beautiful finish.",
    skills: ['Interior Painting', 'Exterior Painting', 'Color Consultation', 'Drywall Repair'],
    certifications: [],
    portfolio: [
      {
        id: 'p5',
        title: 'Full Home Interior Repaint',
        description: 'Updated a 3-bedroom home with a modern, neutral color palette.',
        imageUrl: 'https://picsum.photos/seed/work5/600/400',
        imageHint: 'living room',
      },
    ],
    rating: 4.9,
    reviewsCount: 95,
  },
];

export const projects: Project[] = [
  {
    id: 'proj1',
    name: 'Kitchen Remodel & Smart Lighting',
    clientName: 'Alex Johnson',
    clientId: 'user1',
    description:
      'Looking for a certified professional to undertake a full kitchen remodel. This includes new cabinets, countertops, and flooring. A key part of the project is the installation of a smart lighting system (e.g., Philips Hue or similar) with under-cabinet and ceiling lights. Please provide a portfolio of similar work.',
    location: 'San Francisco, CA',
    budget: '$15,000 - $25,000',
    postedDate: '2024-05-15',
    status: 'Open',
    requiredSkills: ['Cabinet Installation', 'Smart Home Automation', 'Flooring', 'Lighting Design'],
  },
  {
    id: 'proj2',
    name: 'Backyard Deck Construction',
    clientName: 'Emily White',
    clientId: 'user2',
    description:
      'We want to build a large (approx. 400 sq ft) composite deck in our backyard. The design should include built-in benches and planters. The professional must have experience with composite decking materials like Trex or Azek and be able to handle the permit process.',
    location: 'Austin, TX',
    budget: '$18,000',
    postedDate: '2024-05-10',
    status: 'Open',
    requiredSkills: ['Custom Decks', 'Framing', 'Permit-pulling'],
  },
  {
    id: 'proj3',
    name: 'Apartment Interior Painting',
    clientName: 'Michael Brown',
    clientId: 'user3',
    description:
      'Need to have a 2-bedroom, 2-bathroom apartment (approx. 1100 sq ft) painted. This includes all walls, ceilings, and trim. The job requires careful prep work as the apartment will be furnished. Looking for a clean, efficient, and detail-oriented painter.',
    location: 'Miami, FL',
    budget: '$3,500',
    postedDate: '2024-05-20',
    status: 'Completed',
    requiredSkills: ['Interior Painting', 'Drywall Repair'],
  },
];

export const conversations: Conversation[] = [
  {
    id: 'conv1',
    participant: professionals[0], // Sarah Chen
    messages: [
      {
        id: 'msg1',
        senderId: professionals[0].id,
        text: 'Hello Alex, I saw your kitchen remodel project. I have extensive experience with smart lighting and would love to discuss your vision. You can see some of my work on my profile.',
        timestamp: '2024-05-16T10:00:00Z',
      },
      {
        id: 'msg2',
        senderId: 'user1', // Alex Johnson
        text: "Hi Sarah, thanks for reaching out! Your portfolio looks great. I'm particularly interested in the energy efficiency of the lighting. Are you available for a quick call this week?",
        timestamp: '2024-05-16T11:30:00Z',
      },
    ],
    lastMessage: "Hi Sarah, thanks for reaching out! Your portfolio looks great. I'm particularly interested in the energy efficiency of the lighting. Are you available for a quick call this week?",
    lastMessageTime: '11:30 AM',
    unreadCount: 0,
  },
  {
    id: 'conv2',
    participant: professionals[1], // David Lee
    messages: [
      {
        id: 'msg3',
        senderId: professionals[1].id,
        text: "Hi Emily, I'm a lead carpenter in Austin and your deck project sounds fantastic. I've built many composite decks and can definitely handle the design and permitting. When would be a good time to look at the site?",
        timestamp: '2024-05-12T09:15:00Z',
      },
    ],
    lastMessage: "Hi Emily, I'm a lead carpenter in Austin and your deck project sounds fantastic. I've built many composite decks and can definitely handle the design and permitting. When would be a good time to look at the site?",
    lastMessageTime: 'Yesterday',
    unreadCount: 3,
  },
];


export const certificationVerifications: CertificationVerification[] = [
    {
      id: 'v1',
      professionalId: '2',
      professionalName: 'David Lee',
      professionalAvatarUrl: 'https://picsum.photos/seed/p2/200/200',
      certificationName: 'OSHA 30-Hour Construction',
      submittedDate: '2024-05-18',
      status: 'Pending',
    },
    {
      id: 'v2',
      professionalId: '1',
      professionalName: 'Sarah Chen',
      professionalAvatarUrl: 'https://picsum.photos/seed/p1/200/200',
      certificationName: 'Advanced Smart Home Technician',
      submittedDate: '2024-05-17',
      status: 'Pending',
    },
    {
      id: 'v3',
      professionalId: '4',
      professionalName: 'Kenji Tanaka',
      professionalAvatarUrl: 'https://picsum.photos/seed/p4/200/200',
      certificationName: 'Certified Plumber',
      submittedDate: '2024-05-12',
      status: 'Verified',
    },
     {
      id: 'v4',
      professionalId: '3',
      professionalName: 'Maria Garcia',
      professionalAvatarUrl: 'https://picsum.photos/seed/p3/200/200',
      certificationName: 'Lead-Safe Certified Firm',
      submittedDate: '2024-04-25',
      status: 'Rejected',
    },
];

export const currentUser = {
  id: 'user1',
  name: 'Alex Johnson',
  email: 'alex.j@example.com',
  avatarUrl: 'https://picsum.photos/seed/p5/200/200',
};

export const recentProjects = projects.slice(0, 3);
export const nearbyProfessionals = professionals.slice(0, 3);
export const recentMessages = [
    {
        id: "1",
        name: "Sarah Chen",
        avatarUrl: "https://picsum.photos/seed/p1/200/200",
        message: "Hi Alex, I'm available for a call tomorrow at 2 PM PST to discuss the kitchen project. Does that work for you?",
        time: "2 hours ago",
    },
    {
        id: "2",
        name: "David Lee",
        avatarUrl: "https://picsum.photos/seed/p2/200/200",
        message: "Just confirming I've submitted my quote for the deck construction. Let me know if you have any questions.",
        time: "1 day ago",
    }
];
