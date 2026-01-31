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
    role: 'Maestra Electricista',
    location: 'San Francisco, CA',
    about:
      'Con más de 15 años de experiencia, me especializo en sistemas eléctricos residenciales y comerciales, incluyendo instalaciones de hogares inteligentes y actualizaciones de eficiencia energética. Mi enfoque es la seguridad, calidad y confiabilidad.',
    skills: ['Automatización del Hogar', 'Instalación de Cargador EV', 'Actualizaciones de Panel', 'Diseño de Iluminación'],
    certifications: [
      {
        id: 'c1',
        name: 'Maestra Electricista Licenciada',
        issuingBody: 'Estado de California',
        issueDate: '2010-06-15',
        status: 'Verificado',
      },
    ],
    portfolio: [
      {
        id: 'p1',
        title: 'Iluminación de Cocina Moderna',
        description: 'Revisión completa del sistema de iluminación de la cocina con tiras de LED y controles inteligentes.',
        imageUrl: 'https://picsum.photos/seed/work1/600/400',
        imageHint: 'cocina moderna',
      },
      {
        id: 'p4',
        title: 'Cableado de Hogar Inteligente',
        description: 'Cableado estructurado para un proyecto de nueva construcción, permitiendo la automatización completa del hogar.',
        imageUrl: 'https://picsum.photos/seed/work4/600/400',
        imageHint: 'cableado electrico',
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
    role: 'Carpintero Principal y Constructor',
    location: 'Austin, TX',
    about:
      'Carpintero de tercera generación con pasión por crear estructuras hermosas y duraderas. Gestiono proyectos desde la estructura hasta el acabado, asegurando que cada detalle sea perfecto. Construyamos algo grandioso juntos.',
    skills: ['Terrazas Personalizadas', 'Estructuras', 'Carpintería de Acabado', 'Instalación de Gabinetes'],
    certifications: [
      {
        id: 'c2',
        name: 'Carpintero Principal Certificado (CLC)',
        issuingBody: 'NARI',
        issueDate: '2012-03-20',
        status: 'Verificado',
      },
      {
        id: 'c3',
        name: 'Construcción OSHA 30 Horas',
        issuingBody: 'OSHA',
        issueDate: '2022-01-10',
        status: 'Pendiente',
      },
    ],
    portfolio: [
      {
        id: 'p2',
        title: 'Terraza de Secuoya con Pérgola',
        description: 'Una terraza de secuoya de varios niveles diseñada para el entretenimiento al aire libre.',
        imageUrl: 'https://picsum.photos/seed/work2/600/400',
        imageHint: 'terraza de madera',
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
    role: 'Pintora de Interiores y Exteriores',
    location: 'Miami, FL',
    about:
      'Transformar espacios con color es mi especialidad. Ofrezco servicios de pintura meticulosos y de alta calidad para interiores y exteriores. Utilizo solo pinturas de primera calidad para un acabado hermoso y duradero.',
    skills: ['Pintura de Interiores', 'Pintura de Exteriores', 'Asesoría de Color', 'Reparación de Paneles de Yeso'],
    certifications: [],
    portfolio: [
      {
        id: 'p5',
        title: 'Repintado Interior Completo de Casa',
        description: 'Actualicé una casa de 3 dormitorios con una paleta de colores moderna y neutra.',
        imageUrl: 'https://picsum.photos/seed/work5/600/400',
        imageHint: 'sala de estar',
      },
    ],
    rating: 4.9,
    reviewsCount: 95,
  },
];

export const projects: Project[] = [
  {
    id: 'proj1',
    name: 'Remodelación de Cocina e Iluminación Inteligente',
    clientName: 'Alex Johnson',
    clientId: 'user1',
    description:
      'Busco un profesional certificado para realizar una remodelación completa de la cocina. Esto incluye gabinetes, encimeras y pisos nuevos. Una parte clave del proyecto es la instalación de un sistema de iluminación inteligente (por ejemplo, Philips Hue o similar) con luces debajo de los gabinetes y en el techo. Por favor, proporcione un portafolio de trabajos similares.',
    location: 'San Francisco, CA',
    budget: '$15,000 - $25,000',
    postedDate: '2024-05-15',
    status: 'Abierto',
    requiredSkills: ['Instalación de Gabinetes', 'Automatización del Hogar', 'Pisos', 'Diseño de Iluminación'],
  },
  {
    id: 'proj2',
    name: 'Construcción de Terraza en el Patio Trasero',
    clientName: 'Emily White',
    clientId: 'user2',
    description:
      'Queremos construir una terraza grande de material compuesto (aprox. 400 pies cuadrados) en nuestro patio trasero. El diseño debe incluir bancos y maceteros incorporados. El profesional debe tener experiencia con materiales para terrazas de material compuesto como Trex o Azek y ser capaz de gestionar el proceso de permisos.',
    location: 'Austin, TX',
    budget: '$18,000',
    postedDate: '2024-05-10',
    status: 'Abierto',
    requiredSkills: ['Terrazas Personalizadas', 'Estructuras', 'Gestión de Permisos'],
  },
  {
    id: 'proj3',
    name: 'Pintura Interior de Apartamento',
    clientName: 'Michael Brown',
    clientId: 'user3',
    description:
      'Necesito pintar un apartamento de 2 dormitorios y 2 baños (aprox. 1100 pies cuadrados). Esto incluye todas las paredes, techos y molduras. El trabajo requiere una preparación cuidadosa ya que el apartamento estará amueblado. Busco un pintor limpio, eficiente y detallista.',
    location: 'Miami, FL',
    budget: '$3,500',
    postedDate: '2024-05-20',
    status: 'Completado',
    requiredSkills: ['Pintura de Interiores', 'Reparación de Paneles de Yeso'],
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
        text: 'Hola Alex, vi tu proyecto de remodelación de cocina. Tengo amplia experiencia con iluminación inteligente y me encantaría discutir tu visión. Puedes ver algunos de mis trabajos en mi perfil.',
        timestamp: '2024-05-16T10:00:00Z',
      },
      {
        id: 'msg2',
        senderId: 'user1', // Alex Johnson
        text: "¡Hola Sarah, gracias por contactarme! Tu portafolio se ve genial. Estoy particularmente interesado en la eficiencia energética de la iluminación. ¿Estás disponible para una llamada rápida esta semana?",
        timestamp: '2024-05-16T11:30:00Z',
      },
    ],
    lastMessage: "¡Hola Sarah, gracias por contactarme! Tu portafolio se ve genial. Estoy particularly interesado en la eficiencia energética de la iluminación. ¿Estás disponible para una llamada rápida esta semana?",
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
        text: "Hola Emily, soy un carpintero principal en Austin y tu proyecto de terraza suena fantástico. He construido muchas terrazas de material compuesto y definitivamente puedo encargarme del diseño y los permisos. ¿Cuándo sería un buen momento para ver el sitio?",
        timestamp: '2024-05-12T09:15:00Z',
      },
    ],
    lastMessage: "Hola Emily, soy un carpintero principal en Austin y tu proyecto de terraza suena fantástico. He construido muchas terrazas de material compuesto y definitivamente puedo encargarme del diseño y los permisos. ¿Cuándo sería un buen momento para ver el sitio?",
    lastMessageTime: 'Ayer',
    unreadCount: 3,
  },
];


export const certificationVerifications: CertificationVerification[] = [
    {
      id: 'v1',
      professionalId: '2',
      professionalName: 'David Lee',
      professionalAvatarUrl: 'https://picsum.photos/seed/p2/200/200',
      certificationName: 'Construcción OSHA 30 Horas',
      submittedDate: '2024-05-18',
      status: 'Pendiente',
    },
    {
      id: 'v2',
      professionalId: '1',
      professionalName: 'Sarah Chen',
      professionalAvatarUrl: 'https://picsum.photos/seed/p1/200/200',
      certificationName: 'Técnico Avanzado en Hogares Inteligentes',
      submittedDate: '2024-05-17',
      status: 'Pendiente',
    },
    {
      id: 'v3',
      professionalId: '4',
      professionalName: 'Kenji Tanaka',
      professionalAvatarUrl: 'https://picsum.photos/seed/p4/200/200',
      certificationName: 'Plomero Certificado',
      submittedDate: '2024-05-12',
      status: 'Verificado',
    },
     {
      id: 'v4',
      professionalId: '3',
      professionalName: 'Maria Garcia',
      professionalAvatarUrl: 'https://picsum.photos/seed/p3/200/200',
      certificationName: 'Empresa Certificada en Seguridad con Plomo',
      submittedDate: '2024-04-25',
      status: 'Rechazado',
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
        message: "Hola Alex, estoy disponible para una llamada mañana a las 2 PM PST para discutir el proyecto de la cocina. ¿Te parece bien?",
        time: "hace 2 horas",
    },
    {
        id: "2",
        name: "David Lee",
        avatarUrl: "https://picsum.photos/seed/p2/200/200",
        message: "Solo para confirmar que he enviado mi cotización para la construcción de la terraza. Avísame si tienes alguna pregunta.",
        time: "hace 1 día",
    }
];
