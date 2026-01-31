import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { currentUser } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ProfilePage() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight font-headline mb-6">
        Mi Perfil y Configuración
      </h1>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="account">Cuenta</TabsTrigger>
          <TabsTrigger value="properties">Propiedades</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Perfil Público</CardTitle>
              <CardDescription>
                Esta información se mostrará en tu perfil de cliente.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={currentUser.avatarUrl} />
                  <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Button variant="outline">Cambiar Foto</Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input id="name" defaultValue={currentUser.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Ubicación</Label>
                <Input id="location" defaultValue="San Francisco, CA" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Acerca de Ti</Label>
                <Textarea
                  id="bio"
                  placeholder="Cuéntanos un poco sobre ti o tu empresa."
                  defaultValue="Soy un propietario en el Área de la Bahía que busca profesionales confiables para varios proyectos de mejoras para el hogar."
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Guardar Cambios</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Configuración de la Cuenta</CardTitle>
              <CardDescription>
                Gestiona tu cuenta e información de contacto.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Dirección de Correo Electrónico</Label>
                <Input id="email" type="email" defaultValue={currentUser.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Nueva Contraseña</Label>
                <Input id="password" type="password" />
              </div>
               <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Actualizar Cuenta</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="properties">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Mis Propiedades</CardTitle>
              <CardDescription>
                Gestiona las propiedades donde necesitarás que se realicen trabajos.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Residencia Principal</CardTitle>
                      <CardDescription>123 Main St, San Francisco, CA</CardDescription>
                    </div>
                    <Button variant="outline">Editar</Button>
                  </CardHeader>
              </Card>
               <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Unidad de Alquiler</CardTitle>
                      <CardDescription>456 Oak Ave, Oakland, CA</CardDescription>
                    </div>
                    <Button variant="outline">Editar</Button>
                  </CardHeader>
              </Card>
            </CardContent>
             <CardFooter>
              <Button>Añadir Nueva Propiedad</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
