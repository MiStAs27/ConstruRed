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
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Verified':
        return 'default';
      case 'Pending':
        return 'secondary';
      case 'Rejected':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const renderTable = (statusFilter?: 'Pending' | 'Verified' | 'Rejected') => {
    const items = statusFilter
      ? certificationVerifications.filter((c) => c.status === statusFilter)
      : certificationVerifications;

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Professional</TableHead>
            <TableHead>Certification</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Submitted</TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
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
                  {verification.professionalName}
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
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Verify</DropdownMenuItem>
                    <DropdownMenuItem>Reject</DropdownMenuItem>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
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
    <div className="p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">
            Certification Verification
          </CardTitle>
          <CardDescription>
            Review and manage professional certification submissions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="verified">Verified</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
            <TabsContent value="all">{renderTable()}</TabsContent>
            <TabsContent value="pending">{renderTable('Pending')}</TabsContent>
            <TabsContent value="verified">{renderTable('Verified')}</TabsContent>
            <TabsContent value="rejected">{renderTable('Rejected')}</TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-4</strong> of{' '}
            <strong>{certificationVerifications.length}</strong> certifications
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
