import { ListFilter, Search } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <div className="p-4 md:p-8">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Explorar Proyectos
          </h1>
          <p className="text-muted-foreground">
            Encuentra oportunidades que coincidan con tus habilidades.
          </p>
        </div>
        <Button asChild>
          <Link href="/projects/new">Publicar un Proyecto</Link>
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar por título o habilidad..." className="pl-8" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-1">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Filtrar
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filtrar por Estado</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>Abierto</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>En Progreso</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Completado</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                  <CardTitle className="font-headline text-lg leading-snug">
                    {project.name}
                  </CardTitle>
                  <Badge variant={project.status === 'Abierto' ? 'outline' : 'secondary'}>{project.status}</Badge>
              </div>
              <CardDescription>
                por {project.clientName} en {project.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {project.description}
              </p>
              <div className="mt-4">
                  <span className="font-semibold text-sm">Presupuesto:</span> <span className="text-sm text-muted-foreground">{project.budget}</span>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
               <div className="flex flex-wrap gap-1">
                    {project.requiredSkills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                </div>
              <Button asChild className="w-full">
                <Link href={`/projects/${project.id}`}>Ver Detalles</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
