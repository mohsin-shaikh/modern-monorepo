"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@pkg/ui/components/avatar"
import { Button } from "@pkg/ui/components/button"
import { Input } from "@pkg/ui/components/input"
import { Label } from "@pkg/ui/components/label"
import { updateTeamAction } from "@/actions/update-team-action"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@pkg/ui/components/alert-dialog"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@pkg/ui/components/card"

export function TeamSettings() {
  const router = useRouter()
  const [teamName, setTeamName] = useState("My Team")
  const [isUploading, setIsUploading] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      setIsUploading(true)
      // TODO: Implement avatar upload logic
      // const formData = new FormData()
      // formData.append("avatar", file)
      // await uploadAvatar(formData)
    } catch (error) {
      console.error("Error uploading avatar:", error)
    } finally {
      setIsUploading(false)
    }
  }

  const handleTeamNameUpdate = async () => {
    try {
      setIsUpdating(true)
      await updateTeamAction({
        name: teamName,
        revalidatePath: "/settings"
      })
    } catch (error) {
      console.error("Error updating team name:", error)
    } finally {
      setIsUpdating(false)
    }
  }

  const handleTeamDelete = async () => {
    try {
      setIsDeleting(true)
      // TODO: Implement team deletion logic
      // await deleteTeam()
      router.push("/")
    } catch (error) {
      console.error("Error deleting team:", error)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Team Avatar</CardTitle>
          <CardDescription>
            Upload a team avatar to personalize your team's appearance.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder-avatar.png" alt="Team Avatar" />
              <AvatarFallback>TA</AvatarFallback>
            </Avatar>
            <Input
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              disabled={isUploading}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Team Name</CardTitle>
          <CardDescription>
            Update your team's display name.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="teamName">Name</Label>
            <Input
              id="teamName"
              value={teamName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTeamName(e.target.value)}
              placeholder="Enter team name"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleTeamNameUpdate}
            disabled={isUpdating}
          >
            {isUpdating ? "Updating..." : "Update Name"}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Delete Team</CardTitle>
          <CardDescription>
            Permanently delete your team and all of its data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete Team</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  team and remove all data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleTeamDelete}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  disabled={isDeleting}
                >
                  {isDeleting ? "Deleting..." : "Delete Team"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  )
} 