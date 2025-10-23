"use server";

import { revalidatePath } from "next/cache";
import { SessionData, sleep } from "./lib";
import { defaultSession, sessionOptions } from "./lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export async function getSession(shouldSleep = true) {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(
    cookieStore,
    sessionOptions,
  );

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
    session.username = defaultSession.username;
    session.jobTitle = defaultSession.jobTitle;
  }

  if (shouldSleep) {
    // simulate looking up the user in db
    await sleep(250);
  }

  return session;
}

export async function login(formData: FormData) {
  "use server";
  const session = await getSession();

  session.isLoggedIn = true;
  session.username = (formData.get("username") as string) ?? "no username";
  session.jobTitle = (formData.get("jobTitle") as string) ?? "no job title";

  await session.save();
  revalidatePath("/information");
}

export async function logout() {
  "use server";
  const session = await getSession(false);
  session.destroy();
  revalidatePath("/");
}

export async function updateData(formData: FormData) {
  "use server";
  const session = await getSession();

  session.isLoggedIn = true;
  session.username = (formData.get("username") as string) ?? "no username";
  session.jobTitle = (formData.get("jobTitle") as string) ?? "no job title";

  await session.save();
  revalidatePath("/information");
}
