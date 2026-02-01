import { MoreHorizontal } from 'lucide-react';
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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { certificationVerifications } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CertificationsPage() {
  const getStatusVariant = (status: string): 'default' | 'secondary' | 'destructive' | 'outline' => {
    switch (status) {
      case 'Verificado':
        return 'default';
      case 'Pendiente':
        return 'secondary';
      case 'Rechazado':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const renderTable = (statusFilter?: 'Pendiente' | 'Verificado' | 'Rechazado') => {
    const items = statusFilter
      ? certificationVerifications.filter((c) => c.status === statusFilter)
      : certificationVerifications;

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Profesional</TableHead>
            <TableHead>Certificación</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Enviado</TableHead>
            <TableHead>
              <span className="sr-only">Acciones</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((verification) => (
            <TableRow key={verification.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage
                      src={verification.professionalAvatarUrl}
                      alt={verification.professionalName}
                    />
                    <AvatarFallback>
                      {verification.professionalName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="font-medium">{verification.professionalName}</div>
                </div>
              </TableCell>
              <TableCell>{verification.certificationName}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(verification.status)}>
                  {verification.status}
                </Badge>
              </TableCell>
              <TableCell>{verification.submittedDate}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DropdownMenuItem>Verificar</DropdownMenuItem>
                    <DropdownMenuItem>Rechazar</DropdownMenuItem>
                    <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">
          Verificación de Certificación
        </CardTitle>
        <CardDescription>
          Revisa y gestiona las solicitudes de certificación profesional.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="pending">Pendiente</TabsTrigger>
            <TabsTrigger value="verified">Verificado</TabsTrigger>
            <TabsTrigger value="rejected">Rechazado</TabsTrigger>
          </TabsList>
          <TabsContent value="all">{renderTable()}</TabsContent>
          <TabsContent value="pending">{renderTable('Pendiente')}</TabsContent>
          <TabsContent value="verified">{renderTable('Verificado')}</TabsContent>
          <TabsContent value="rejected">{renderTable('Rechazado')}</TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Mostrando <strong>1-4</strong> de{' '}
          <strong>{certificationVerifications.length}</strong> certificaciones
        </div>
      </CardFooter>
    </Card>
  );
}
