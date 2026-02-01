import { CheckCircle, Mail, MapPin, Phone, Star } from 'lucide-react';
import Image from 'next/image';
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
import { professionals } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type ProfessionalPageProps = {
  params: {
    id: string;
  };
};

export default function ProfessionalPage({ params }: ProfessionalPageProps) {
  const professional = professionals.find((p) => p.id === params.id);
  const headerImage = PlaceHolderImages.find(img => img.id === 'profile-header-1');


  if (!professional) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden">
        <div className="relative h-48 w-full bg-muted">
           {headerImage && <Image
                src={headerImage.imageUrl}
                alt="Encabezado del perfil"
                fill
                className="object-cover"
                data-ai-hint={headerImage.imageHint}
            />}
        </div>
        <CardHeader className="flex flex-col items-start gap-4 md:flex-row p-6">
          <Avatar className="h-28 w-28 -mt-20 border-4 border-background bg-background">
            <AvatarImage src={professional.avatarUrl} alt={professional.name} />
            <AvatarFallback>{professional.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold font-headline">
              {professional.name}
            </h1>
            <p className="text-muted-foreground">{professional.role}</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{professional.location}</span>
            </div>
             <div className="flex items-center pt-1 gap-1 text-sm text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span><strong>{professional.rating}</strong> ({professional.reviewsCount} reseñas)</span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" asChild>
                <Link href="/messages"><Mail className="mr-2 h-4 w-4" /> Mensaje</Link>
            </Button>
            <Button>Solicitar Cotización</Button>
          </div>
        </CardHeader>
      </Card>
      
      <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline">Acerca de</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground">{professional.about}</p>
                  </CardContent>
              </Card>

              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline">Portafolio</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <Carousel className="w-full">
                        <CarouselContent>
                          {professional.portfolio.map((item) => (
                            <CarouselItem key={item.id}>
                              <div className="p-1">
                                <Card>
                                  <CardContent className="relative flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                                    <Image src={item.imageUrl} alt={item.title} fill className="object-cover transition-transform duration-300 hover:scale-105" data-ai-hint={item.imageHint}/>
                                  </CardContent>
                                  <div className="p-4 bg-background">
                                      <h3 className="font-semibold">{item.title}</h3>
                                      <p className="text-sm text-muted-foreground">{item.description}</p>
                                  </div>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="ml-16" />
                        <CarouselNext className="mr-16" />
                      </Carousel>
                  </CardContent>
              </Card>
          </div>

          <div className="space-y-8">
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline">Habilidades</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                      {professional.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                  </CardContent>
              </Card>
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline">Certificaciones</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      {professional.certifications.map((cert) => (
                           <div key={cert.id} className="flex items-start gap-4">
                                <CheckCircle className="h-5 w-5 mt-0.5 text-primary"/>
                               <div>
                                   <p className="font-semibold">{cert.name}</p>
                                   <p className="text-sm text-muted-foreground">
                                       {cert.issuingBody} - {cert.status === 'Verificado' ? `Emitido ${cert.issueDate}` : `Estado: ${cert.status}`}
                                   </p>
                               </div>
                           </div>
                      ))}
                  </CardContent>
              </Card>
          </div>
      </div>
    </div>
  );
}
