import {
  Activity,
  Briefcase,
  CheckCircle,
  ChevronRight,
  MapPin,
  MessageSquare,
  Users,
  ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { recentProjects, nearbyProfessionals, recentMessages } from '@/lib/data';

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          ¡Bienvenido de nuevo, Alex!
        </h1>
        <div className="flex items-center space-x-2">
            <Button>Publicar un Proyecto</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Proyectos Activos</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3 text-green-500"/>
              +2 desde la semana pasada
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Profesionales Cercanos
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              en tu ciudad
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mensajes no Leídos</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
             <p className="text-xs text-muted-foreground">
              de 2 conversaciones
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aprobaciones Pendientes</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              certificaciones por verificar
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle className="font-headline">Proyectos Recientes</CardTitle>
              <CardDescription>
                Un resumen de tus proyectos publicados recientemente.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/projects">
                Ver Todos
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Proyecto</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Presupuesto</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>
                      <div className="font-medium">{project.name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {project.clientName}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={project.status === 'Abierto' ? 'outline' : 'secondary'}>{project.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">{project.budget}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Profesionales Cercanos</CardTitle>
            <CardDescription>
              Profesionales certificados disponibles en tu área.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            {nearbyProfessionals.map((pro) => (
              <div key={pro.id} className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={pro.avatarUrl} alt={pro.name} />
                    <AvatarFallback>{pro.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">{pro.name}</p>
                    <p className="text-sm text-muted-foreground">{pro.role}</p>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/professionals/${pro.id}`}>Ver</Link>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
         <Card className="xl:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Mensajes Recientes</CardTitle>
            <CardDescription>
              Ponte al día con tus últimas conversaciones.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentMessages.map((message) => (
                <div key={message.id} className="flex items-start gap-4">
                  <Avatar className="h-10 w-10 border">
                    <AvatarImage src={message.avatarUrl} />
                    <AvatarFallback>{message.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                        <p className="font-semibold">{message.name}</p>
                        <p className="text-xs text-muted-foreground">{message.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{message.message}</p>
                  </div>
                  <Button asChild variant="ghost" size="icon" className="ml-auto">
                    <Link href="/messages">
                        <ChevronRight className="h-4 w-4"/>
                    </Link>
                  </Button>
                </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
