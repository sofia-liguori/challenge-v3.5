"use server";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getSession, login as loginAction } from "../app/actions";
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
                placeholder="@username"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input id="jobTitle" type="text" name="jobTitle" required />
            </div>
          </div>
          <div className="flex flex-row-reverse pt-6">
            <Button className="cursor-pointer" type="submit">Enter</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export async function login(
  // THIS IS THE PARAMETER THAT WE NEED TO ADD
  prevState: { error: undefined | string },
  formData: FormData
) {
  const session = await getSession();

  const formUsername = formData.get("username") as string;
  const formJobTitle = formData.get("jobTitle") as string;

  const user = {
    id: 1,
    username: formUsername,
    jobTitle: formJobTitle,
    img: "avatar.png",
  };

  if (!user) {
    // IF THERE IS AN ERROR THE STATE WILL BE UPDATED
    return { error: "Wrong Credentials!" };
  }

  session.isLoggedIn = true;
  session.userId = user.id;
  session.jobTitle = user.jobTitle;
  session.username = user.username;

  await session.save();
  redirect("/information");
}
