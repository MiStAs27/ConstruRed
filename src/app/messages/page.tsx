import { Search } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { conversations, currentUser } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Paperclip, Mic, CornerDownLeft } from 'lucide-react';

export default function MessagesPage() {
  const selectedConversation = conversations[0];

  return (
    <div className="grid h-[calc(100vh-60px)] w-full grid-cols-[280px_1fr]">
      <div className="flex flex-col border-r bg-card">
        <div className="flex h-14 items-center border-b p-4">
          <h2 className="font-semibold tracking-tight font-headline">Conversations</h2>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="p-2">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search messages..."
                  className="w-full bg-background pl-8"
                />
              </div>
            </form>
          </div>
          <nav className="grid gap-1 p-2">
            {conversations.map((conv, index) => (
              <button
                key={conv.id}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-all hover:bg-muted',
                  index === 0 && 'bg-muted'
                )}
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={conv.participant.avatarUrl}
                    alt={conv.participant.name}
                  />
                  <AvatarFallback>
                    {conv.participant.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 truncate">
                  <div className="font-medium">{conv.participant.name}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {conv.lastMessage}
                  </div>
                </div>
                {conv.unreadCount > 0 && (
                    <div className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        {conv.unreadCount}
                    </div>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex h-14 items-center border-b bg-card p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={selectedConversation.participant.avatarUrl}
                alt={selectedConversation.participant.name}
              />
              <AvatarFallback>
                {selectedConversation.participant.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">
                {selectedConversation.participant.name}
              </div>
              <div className="text-xs text-muted-foreground">
                {selectedConversation.participant.role}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-4">
            {selectedConversation.messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex items-end gap-3',
                  message.senderId === currentUser.id && 'justify-end'
                )}
              >
                {message.senderId !== currentUser.id && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={selectedConversation.participant.avatarUrl}
                      alt={selectedConversation.participant.name}
                    />
                    <AvatarFallback>
                      {selectedConversation.participant.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    'max-w-xs rounded-lg p-3 text-sm md:max-w-md',
                    message.senderId === currentUser.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  )}
                >
                  <p>{message.text}</p>
                </div>
                {message.senderId === currentUser.id && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={currentUser.avatarUrl}
                      alt={currentUser.name}
                    />
                    <AvatarFallback>
                      {currentUser.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="border-t bg-card p-4">
          <form className="relative">
            <Input
              placeholder="Type your message..."
              className="pr-24"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                        <Paperclip className="h-4 w-4" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Attach file</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                        <Mic className="h-4 w-4" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Use voice</p>
                    </TooltipContent>
                </Tooltip>
                <Button type="submit" size="icon">
                    <CornerDownLeft className="h-4 w-4" />
                </Button>
            </TooltipProvider>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
