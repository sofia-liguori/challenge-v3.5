import Login from '@/components/Login';


export default function Home() {
  return (
    <div className="flex justify-center min-h-screen font-sans dark:bg-black">
      <main className="flex flex-col w-full max-w-3xl items-center content-start bg-white dark:bg-black">
        <Login />
      </main>
    </div>
  );
}
