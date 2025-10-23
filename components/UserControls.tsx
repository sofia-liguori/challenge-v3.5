"use server";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getSession, logout, updateData } from "../app/actions";
import { UserCog, LogOut } from "lucide-react";

export default async function UserControls() {
  const session = await getSession();

  return (
    <div className="flex flex-end items-center">
      <p className="text-xs font-semibold px-4">{session.username}</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" title="User Settings" className="cursor-pointer">
            <UserCog />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Profile details</DialogTitle>
            <DialogDescription>Manage current user profile</DialogDescription>
          </DialogHeader>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue={session.username}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="job-title-1">Job Title</Label>
                <Input
                  id="job-title-1"
                  name="job-title"
                  defaultValue={session.jobTitle}
                />
              </div>
            </div>
            <div className="flex flex-row-reverse pt-6">
            <Button type="submit" className="cursor-pointer" formAction={updateData}>
              Update
            </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <Button variant="ghost" title="Logout" className="cursor-pointer" onClick={logout}>
        <LogOut />
      </Button>
    </div>
  );
}
