import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@pkg/ui/components/tabs";
import { Suspense } from "react";
import { DataTable as MembersTable } from "./tables/members/index";
import { DataTable as PendingInvitesTable } from "./tables/pending-invites/index";
import { PendingInvitesSkeleton } from "./tables/pending-invites/skeleton";
import { cn } from "@pkg/ui/lib/utils";

export function TeamMembers() {
  return (
    <Tabs defaultValue="members">
      <TabsList
      className={cn(
        "w-full justify-start mb-1",
        // "bg-transparent border-b-[1px]", 
        // "rounded-none h-auto pb-4"
      )}
      >
        <TabsTrigger value="members"
        // className="p-0 m-0 mr-4"
        >
          Team Members
        </TabsTrigger>
        <TabsTrigger value="pending"
        // className="p-0 m-0"
        >
          Pending Invitations
        </TabsTrigger>
      </TabsList>

      <TabsContent value="members">
        <Suspense fallback={<PendingInvitesSkeleton />}>
          <MembersTable />
        </Suspense>
      </TabsContent>

      <TabsContent value="pending">
        <Suspense fallback={<PendingInvitesSkeleton />}>
          <PendingInvitesTable />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
}
