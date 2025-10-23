"use server";

import { redirect } from "next/navigation";
import { getSession } from "../actions";
import InformationSection from "@/components/InformationSection";

export default async function information() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  console.log(session.username);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans dark:bg-black">
      <main className="flex flex-col min-h-screen w-full max-w-3xl items-center bg-white dark:bg-black sm:items-start">
        <InformationSection />
      </main>
    </div>
  );
}
