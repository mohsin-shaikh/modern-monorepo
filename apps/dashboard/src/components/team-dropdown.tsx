'use client';

import { changeTeamAction } from '@/actions/change-team-action';
import { useUserQuery } from '@/hooks/use-user';
import { useTRPC } from '@/trpc/client';
import {
  Avatar,
  AvatarFallback,
  AvatarImageNext,
} from '@pkg/ui/components/avatar';
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@pkg/ui/components/dropdown-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@pkg/ui/components/dropdown-menu';
import { SidebarMenuButton, SidebarMenuItem, useSidebar } from '@pkg/ui/components/sidebar';
import { SidebarMenu } from '@pkg/ui/components/sidebar';
import { ChevronsUpDown, Plus } from 'lucide-react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useAction } from 'next-safe-action/hooks';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function TeamDropdown() {
  const { data: user } = useUserQuery();
  const queryClient = useQueryClient();

  const router = useRouter()
  const { isMobile } = useSidebar()

  const [selectedId, setSelectedId] = useState<string | undefined>(
    user?.team?.id
  );
  const [isChangingTeam, setIsChangingTeam] = useState(false);

  const changeTeam = useAction(changeTeamAction, {
    onSuccess: () => {
      // Invalidate all queries to refresh the data
      queryClient.invalidateQueries();
      setIsChangingTeam(false);
    },
  });

  const trpc = useTRPC();
  const { data: teams } = useQuery(trpc.team.list.queryOptions());

  useEffect(() => {
    if (user?.team?.id) {
      setSelectedId(user.team.id);
    }
  }, [user?.team?.id]);

  const sortedTeams =
    teams?.sort((a, b) => {
      if (a.team.id === selectedId) return -1;
      if (b.team.id === selectedId) return 1;

      return a.team.id.localeCompare(b.team.id);
    }) ?? [];

  const handleTeamChange = (teamId: string) => {
    if (teamId === selectedId) {
      return;
    }

    setIsChangingTeam(true);
    setSelectedId(teamId);

    changeTeam.execute({ teamId, redirectTo: '/' });
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <div className='bg-sidebar-primary flex aspect-square size-8 items-center justify-center rounded-lg'>
                <Avatar
                  className='w-[32px] h-[32px] rounded-md border border-[#DCDAD2] dark:border-[#2C2C2C] cursor-pointer'
                >
                  <AvatarImageNext
                      src={sortedTeams[0]?.team?.logo_url ?? ''}
                      alt={sortedTeams[0]?.team?.name ?? ''}
                      width={20}
                      height={20}
                      quality={100}
                    />
                  <AvatarFallback className='rounded-none w-[32px] h-[32px]'>
                    <span className='text-xs'>
                      {sortedTeams[0]?.team?.name
                        ?.charAt(0)
                        ?.toUpperCase()}
                      {sortedTeams[0]?.team?.name
                        ?.charAt(1)
                        ?.toUpperCase()}
                    </span>
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-medium'>
                  {sortedTeams[0]?.team?.name}
                </span>
                <span className='truncate text-xs'>
                  {(sortedTeams[0]?.team?.plan ?? '').charAt(0).toUpperCase() + (sortedTeams[0]?.team?.plan ?? '').slice(1) + ' Plan'}
                </span>
              </div>
              <ChevronsUpDown className='ml-auto' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
            align='start'
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className='text-muted-foreground text-xs'>
              Teams
            </DropdownMenuLabel>
            {sortedTeams.map(({ team }) => (
              <DropdownMenuItem
                key={team.id}
                onClick={() => {
                  handleTeamChange(team.id);
                }}
                className='gap-2 p-2'
              >
                <div className='flex size-6 items-center justify-center rounded-md border'>
                  <Avatar
                    className='w-[32px] h-[32px] rounded-md border border-[#DCDAD2] dark:border-[#2C2C2C] cursor-pointer'
                  >
                    <AvatarImageNext
                      src={team.logo_url ?? ''}
                      alt={team.name ?? ''}
                      width={20}
                      height={20}
                      quality={100}
                    />
                    <AvatarFallback className='rounded-none w-[32px] h-[32px]'>
                      <span className='text-xs'>
                        {team?.name
                          ?.charAt(0)
                          ?.toUpperCase()}
                        {team?.name
                          ?.charAt(1)
                          ?.toUpperCase()}
                      </span>
                    </AvatarFallback>
                  </Avatar>
                </div>
                {team.name}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className='gap-2 p-2'
              onClick={() => router.push('/teams/create')}
            >
              <div className='flex size-6 items-center justify-center rounded-md border bg-transparent'>
                <Plus className='size-4' />
              </div>
              <div className='text-muted-foreground font-medium'>
                Add team
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
