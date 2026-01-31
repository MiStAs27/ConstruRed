import { Calendar, MapPin, Tag, User, Users } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { professionals, projects } from '@/lib/data';

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const interestedProfessionals = professionals.slice(0, 2);

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <Badge variant="outline" className="mb-2">
            {project.status}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-headline">
            {project.name}
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{project.clientName}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Publicado el {project.postedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            <span>Presupuesto: {project.budget}</span>
          </div>
        </div>
        
        <Separator />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
                <h2 className="text-xl font-semibold font-headline mb-2">Descripción del Proyecto</h2>
                <p className="text-muted-foreground whitespace-pre-wrap">{project.description}</p>
            </div>
             <div>
                <h2 className="text-xl font-semibold font-headline mb-2">Habilidades Requeridas</h2>
                 <div className="flex flex-wrap gap-2">
                    {project.requiredSkills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                </div>
            </div>
          </div>
          <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Acciones</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <Button>Estoy Interesado</Button>
                    <Button variant="outline" asChild>
                        <Link href={`/projects/${project.id}/quote/new`}>Enviar una Cotización</Link>
                    </Button>
                </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Users className="h-5 w-5" />
                <CardTitle className="font-headline">
                  Profesionales Interesados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {interestedProfessionals.map((pro) => (
                  <div key={pro.id} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={pro.avatarUrl} alt={pro.name} />
                      <AvatarFallback>{pro.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <Link href={`/professionals/${pro.id}`} className="font-semibold hover:underline">
                        {pro.name}
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        {pro.role}
                      </p>
                    </div>
                  </div>
                ))}
                {professionals.length > 2 && <p className="text-sm text-center text-muted-foreground pt-2">
                    + {professionals.length - 2} más
                    </p>}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
