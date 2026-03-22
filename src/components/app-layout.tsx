'use client';

import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  ShieldCheck,
  Menu,
  Bell,
  Search,
  ChevronDown,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { currentUser } from '@/lib/data';

const navItems = [
  { href: '/', label: 'Inicio', icon: Home },
  { href: '/proyectos', label: 'Proyectos', icon: Briefcase },
  { href: '/profesionales', label: 'Expertos', icon: Users },
  { href: '/mensajes', label: 'Mensajes', icon: MessageSquare, badge: '3' },
  { href: '/admin/certificaciones', label: 'Administración', icon: ShieldCheck, badge: '2' },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-8">
        <div className="flex items-center gap-2 font-bold font-headline text-xl text-primary">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <span className="hidden sm:inline-block tracking-tight">TechConnect</span>
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center gap-1 px-8">
          {navItems.map(({ href, label, icon: Icon, badge }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                (pathname === href || (href !== '/' && pathname.startsWith(href)))
                  ? 'bg-accent text-primary'
                  : 'text-muted-foreground'
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
              {badge && (
                <Badge variant="default" className="ml-1 h-5 px-1.5 min-w-[1.25rem] flex items-center justify-center text-[10px]">
                  {badge}
                </Badge>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 ml-auto">
          <div className="relative hidden lg:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar..."
              className="h-9 w-64 bg-accent/50 border-none shadow-none pl-9 focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-destructive"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 pl-1 pr-2 hover:bg-accent rounded-full transition-all">
                <Avatar className="h-8 w-8 border">
                  <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                  <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="hidden lg:flex flex-col items-start text-left leading-none">
                  <span className="text-sm font-semibold">{currentUser.name}</span>
                  <span className="text-xs text-muted-foreground mt-0.5">Cliente Gold</span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/perfil">Ver Perfil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Configuración</DropdownMenuItem>
              <DropdownMenuItem>Centro de Ayuda</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Cerrar Sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="flex flex-col gap-6 py-4">
                <div className="flex items-center gap-2 font-bold font-headline text-xl text-primary">
                  <ShieldCheck className="h-7 w-7" />
                  <span>TechConnect</span>
                </div>
                <nav className="flex flex-col gap-2">
                  {navItems.map(({ href, label, icon: Icon, badge }) => (
                    <Link
                      key={label}
                      href={href}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-3 text-lg font-medium transition-colors',
                        pathname === href ? 'bg-accent text-primary' : 'text-muted-foreground hover:bg-accent/50'
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {label}
                      {badge && (
                        <Badge className="ml-auto">{badge}</Badge>
                      )}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <footer className="border-t bg-card py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} TechConnect S.A. Todos los derechos reservados. Profesionales Certificados.
        </div>
      </footer>
    </div>
  );
}