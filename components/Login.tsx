"use server";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getSession, login as loginAction } from "@/auth/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function Login() {
  const session = await getSession();

  if (session.isLoggedIn) {
    redirect("/information");
  }

  return (
    <Card className="justify-center w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your details to proceed</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={loginAction}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input id="jobTitle" type="text" name="jobTitle" required />
            </div>
          </div>
          <div className="flex flex-row-reverse pt-6">
            <Button className="cursor-pointer" type="submit">
              Enter
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
