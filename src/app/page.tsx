import {
  Activity,
  Briefcase,
  ChevronRight,
  MessageSquare,
  Users,
  ArrowUpRight,
  Plus,
  Star,
  Clock,
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
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight font-headline">
            Panel de Control
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Hola, Alex. Tienes 3 mensajes nuevos y 5 proyectos activos.
          </p>
        </div>
        <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:flex">Exportar Informe</Button>
            <Button className="shadow-lg shadow-primary/25" asChild>
              <Link href="/proyectos/nuevo">
                <Plus className="mr-2 h-4 w-4" /> Publicar Proyecto
              </Link>
            </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Proyectos Activos', value: '5', change: '+2', icon: Briefcase, color: 'text-blue-500' },
          { title: 'Expertos Cercanos', value: '12', sub: 'En tu ciudad', icon: Users, color: 'text-purple-500' },
          { title: 'Mensajes Nuevos', value: '3', sub: '2 conversaciones', icon: MessageSquare, color: 'text-green-500' },
          { title: 'Pendientes', value: '2', sub: 'Certificaciones', icon: Activity, color: 'text-orange-500' },
        ].map((stat, i) => (
          <Card key={i} className="overflow-hidden border-none shadow-md bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className={cn("h-5 w-5", stat.color)} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              {stat.change ? (
                <p className="text-xs text-green-600 font-medium flex items-center gap-1 mt-1">
                  <ArrowUpRight className="h-3 w-3" />
                  {stat.change} este mes
                </p>
              ) : (
                <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-none shadow-xl bg-white overflow-hidden">
          <CardHeader className="flex flex-row items-center bg-muted/30 border-b px-6 py-5">
            <div className="grid gap-1">
              <CardTitle className="font-headline text-xl">Actividad Reciente</CardTitle>
              <CardDescription>Resumen de tus proyectos publicados.</CardDescription>
            </div>
            <Button asChild variant="ghost" size="sm" className="ml-auto text-primary">
              <Link href="/proyectos">
                Ver todos <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/20">
                <TableRow>
                  <TableHead className="px-6">Proyecto</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right px-6">Presupuesto</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentProjects.map((project) => (
                  <TableRow key={project.id} className="hover:bg-muted/10 transition-colors">
                    <TableCell className="px-6 py-4">
                      <div className="font-semibold text-primary">{project.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> Publicado el {project.postedDate}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={project.status === 'Abierto' ? 'outline' : 'secondary'} className="rounded-md">
                        {project.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right px-6 font-medium">{project.budget}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl bg-white">
          <CardHeader className="bg-muted/30 border-b px-6 py-5">
            <CardTitle className="font-headline text-xl">Expertos Destacados</CardTitle>
            <CardDescription>Profesionales verificados en tu zona.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 grid gap-6">
            {nearbyProfessionals.map((pro) => (
              <div key={pro.id} className="flex items-center justify-between group">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/5">
                      <AvatarImage src={pro.avatarUrl} alt={pro.name} />
                      <AvatarFallback>{pro.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white w-3.5 h-3.5 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-none group-hover:text-primary transition-colors">{pro.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{pro.role}</p>
                    <div className="flex items-center gap-0.5 mt-1">
                      <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                      <span className="text-[10px] font-bold text-amber-700">{pro.rating}</span>
                    </div>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm" className="rounded-full px-4 h-8 text-xs font-semibold">
                  <Link href={`/profesionales/${pro.id}`}>Perfil</Link>
                </Button>
              </div>
            ))}
            <Button variant="ghost" className="w-full mt-2 text-primary text-sm font-bold h-10 hover:bg-primary/5" asChild>
              <Link href="/profesionales">Explorar más expertos</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8">
        <Card className="border-none shadow-xl bg-white overflow-hidden">
          <CardHeader className="bg-muted/30 border-b px-6 py-5">
            <CardTitle className="font-headline text-xl">Conversaciones Recientes</CardTitle>
            <CardDescription>Tus últimos mensajes con profesionales.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {recentMessages.map((message) => (
                  <div key={message.id} className="flex items-start gap-4 p-6 hover:bg-muted/10 transition-colors">
                    <Avatar className="h-12 w-12 border shadow-sm">
                      <AvatarImage src={message.avatarUrl} />
                      <AvatarFallback>{message.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                          <p className="font-bold text-primary">{message.name}</p>
                          <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">{message.time}</p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-1 italic">"{message.message}"</p>
                    </div>
                    <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Link href="/mensajes">
                          <ChevronRight className="h-5 w-5"/>
                      </Link>
                    </Button>
                  </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { cn } from '@/lib/utils';