import Sidebar from "./components/Sidebar";
import Dashboard from "./dashboard/page";
// import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex  w-full bg-zinc-50 font-sans">
      <main className="flex  w-full  flex-col items-center justify-between bg-white sm:items-start">
        {/* <Sidebar /> */}
        {/* <Dashboard name="John Doe"/> */}
      </main>
    </div>
  );
}
