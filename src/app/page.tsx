import {
  Activity,
  Briefcase,
  CheckCircle,
  ChevronRight,
  MapPin,
  MessageSquare,
  Users,
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
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Welcome Back, Alex!
        </h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              +2 since last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Professionals Nearby
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              in your city
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
             <p className="text-xs text-muted-foreground">
              from 2 conversations
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              certifications to verify
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle className="font-headline">Recent Projects</CardTitle>
              <CardDescription>
                An overview of your recently posted projects.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/projects">
                View All
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Budget</TableHead>
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
                      <Badge variant={project.status === 'Open' ? 'outline' : 'secondary'}>{project.status}</Badge>
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
            <CardTitle className="font-headline">Nearby Professionals</CardTitle>
            <CardDescription>
              Certified professionals available in your area.
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
                  <Link href={`/professionals/${pro.id}`}>View</Link>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
         <Card className="xl:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Recent Messages</CardTitle>
            <CardDescription>
              Catch up on your latest conversations.
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
