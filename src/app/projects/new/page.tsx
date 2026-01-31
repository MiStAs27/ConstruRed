'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const projectFormSchema = z.object({
  title: z
    .string()
    .min(5, { message: 'El título del proyecto debe tener al menos 5 caracteres.' }),
  description: z
    .string()
    .min(20, { message: 'La descripción debe tener al menos 20 caracteres.' }),
  location: z
    .string()
    .min(2, { message: 'La ubicación debe tener al menos 2 caracteres.' }),
  budget: z.string().min(1, { message: 'Por favor, selecciona un rango de presupuesto.' }),
  skills: z.string().min(1, { message: 'Por favor, enumera las habilidades requeridas.' }),
});

type ProjectFormValues = z.infer<typeof projectFormSchema>;

export default function NewProjectPage() {
  const { toast } = useToast();
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: '',
      description: '',
      location: '',
      budget: '',
      skills: '',
    },
  });

  function onSubmit(data: ProjectFormValues) {
    console.log(data);
    toast({
      title: '¡Proyecto Publicado!',
      description: "Tu proyecto ha sido publicado con éxito. Los profesionales serán notificados.",
    });
    form.reset();
  }

  return (
    <div className="p-4 md:p-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline">Publicar un Nuevo Proyecto</CardTitle>
          <CardDescription>
            Describe tu proyecto para obtener cotizaciones de profesionales certificados.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título del Proyecto</FormLabel>
                    <FormControl>
                      <Input placeholder="ej., Remodelación Completa de Cocina" {...field} />
                    </FormControl>
                    <FormDescription>
                      Un título claro y conciso atraerá a más profesionales.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción del Proyecto</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe en detalle el trabajo que necesitas que se realice. Incluye dimensiones, materiales y cualquier requisito específico."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ubicación</FormLabel>
                      <FormControl>
                        <Input placeholder="Ciudad, Estado" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rango de Presupuesto</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un rango de presupuesto" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="<1k">Menos de $1,000</SelectItem>
                          <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                          <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                          <SelectItem value=">50k">Más de $50,000</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Habilidades Requeridas</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ej., Electricidad, Plomería, Carpintería"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enumera las habilidades requeridas, separadas por comas.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CardFooter className="px-0">
                <Button type="submit">Publicar Proyecto</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
