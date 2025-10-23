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
import Link from "next/link";

export default function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">User info</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profile details</DialogTitle>
          <DialogDescription>Manage current user profile</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="username-1">Username</Label>
            <Input
              id="username-1"
              name="username"
              defaultValue="@sofia-liguori"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="job-title-1">Job Title</Label>
            <Input
              id="job-title-1"
              name="job-title"
              defaultValue="Front-end Engineer"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="outline" type="submit">Logout</Button>
          <Button type="submit">Update</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
