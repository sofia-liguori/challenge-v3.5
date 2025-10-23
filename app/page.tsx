import Login from "@/components/Login";

export default function Home() {
  return (
    <div className="flex flex-grow h-auto justify-center font-sans dark:bg-black">
      <main className="flex flex-col w-full max-w-3xl min-h-screen items-center content-center  dark:bg-black">
        <Login />
      </main>
    </div>
  );
}
