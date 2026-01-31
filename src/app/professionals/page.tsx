import { ListFilter, Map, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
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
import { professionals } from '@/lib/data';
import { Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

export default function ProfessionalsPage() {
  return (
    <div className="p-4 md:p-8">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Find Professionals
          </h1>
          <p className="text-muted-foreground">
            Browse and connect with top-rated certified experts.
          </p>
        </div>
        <Button asChild>
          <Link href="/projects/new">Post a Project</Link>
        </Button>
      </div>

      <Tabs defaultValue="grid">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by skill or name..."
                className="pl-8 w-64"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Filter
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Filter by Trade</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Electrician
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Carpenter</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Painter</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Plumber</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <TabsList>
            <TabsTrigger value="grid">Grid</TabsTrigger>
            <TabsTrigger value="map">Map</TabsTrigger>
          </TabsList>
        </div>

        <Separator className="my-6" />

        <TabsContent value="grid">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {professionals.map((pro) => (
              <Card key={pro.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Avatar className="h-16 w-16 border">
                      <AvatarImage src={pro.avatarUrl} alt={pro.name} />
                      <AvatarFallback>{pro.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center gap-1 text-sm text-amber-500">
                        <Star className="h-4 w-4 fill-current"/>
                        <span className="font-semibold">{pro.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="pt-2 font-headline">{pro.name}</CardTitle>
                  <CardDescription>{pro.role}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-1">
                    {pro.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/professionals/${pro.id}`}>View Profile</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="map">
            <Card>
                <CardContent className="p-0">
                    <div className="h-[600px] w-full bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center text-muted-foreground p-4">
                            <Map className="mx-auto h-12 w-12 mb-4"/>
                            <h3 className="font-semibold text-lg font-headline">Map View Coming Soon</h3>
                            <p>Geolocation features will be available here to help you find professionals near you.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
