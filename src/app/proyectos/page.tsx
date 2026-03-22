import { ListFilter, Search, MapPin, Calendar, CircleDollarSign } from 'lucide-react';
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

export default function ProyectosPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">Explorar Proyectos</h1>
          <p className="text-muted-foreground mt-1">
            Encuentra las mejores oportunidades que se ajusten a tus habilidades y experiencia.
          </p>
        </div>
        <Button asChild size="lg" className="shadow-lg shadow-primary/20">
          <Link href="/proyectos/nuevo">Publicar Proyecto</Link>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 bg-card p-4 rounded-xl border shadow-sm">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar por título, habilidad o palabra clave..." className="pl-10 h-11 bg-muted/30 border-none" />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-11 px-4 gap-2 w-full sm:w-auto">
                <ListFilter className="h-4 w-4" />
                Filtrar por Estado
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Estado del Proyecto</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Abierto</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>En Progreso</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Completado</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col group hover:shadow-xl transition-all duration-300 border-muted/60">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant={project.status === 'Abierto' ? 'outline' : 'secondary'} className="rounded-md px-2 py-0">
                  {project.status}
                </Badge>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                   <Calendar className="h-3 w-3" />
                   {project.postedDate}
                </div>
              </div>
              <CardTitle className="font-headline text-xl leading-tight group-hover:text-primary transition-colors">
                {project.name}
              </CardTitle>
              <div className="flex items-center gap-1 text-sm text-muted-foreground pt-1">
                <MapPin className="h-3.5 w-3.5" />
                {project.location}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-6 flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                <div className="flex items-center gap-1.5 text-sm font-semibold">
                  <CircleDollarSign className="h-4 w-4 text-primary" />
                  Presupuesto
                </div>
                <span className="text-sm font-medium text-primary">{project.budget}</span>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
               <div className="flex flex-wrap gap-1.5">
                    {project.requiredSkills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-normal text-[11px] bg-accent">
                        {skill}
                      </Badge>
                    ))}
                    {project.requiredSkills.length > 3 && (
                      <span className="text-[11px] text-muted-foreground ml-1">
                        +{project.requiredSkills.length - 3} más
                      </span>
                    )}
                </div>
              <Button asChild className="w-full h-11 rounded-lg">
                <Link href={`/proyectos/${project.id}`}>Ver Detalles</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}