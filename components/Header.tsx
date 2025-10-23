import UserControls from "@/components/UserControls";
import { getSession } from "@/auth/actions";

export default async function Header() {
  const session = await getSession();

  return (
    <div className="flex justify-center w-full px-10">
      <div className="flex justify-between items-center w-full max-w-3xl">
        <h1 className="font-heading text-4xl">Character Directory</h1>
        {session.isLoggedIn && <UserControls />}
      </div>
    </div>
  );
}
