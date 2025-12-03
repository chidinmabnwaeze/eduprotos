import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
type DashboardProps = {
  name: string;
};

export default function Dashboard({ name }: DashboardProps) {
  return (
    <div className="flex w-full ml-1/8  bg-white">
      <Sidebar />
      <section className="flex flex-col w-full ml-10">
        <Header children={<div>Dashboard</div>} />
        <main className="bg-gray-50 h-full p-5">
        <section className="sec-1">
          <div className=" box-1 flex items-center justify-between bg-white rounded">
            <div>
              <h1 className="text-2xl font-bold text-black">Hello {name || "Lecturer"}</h1>
              <p className="text-sm text-gray-500">
                Here are your teaching tools for today
              </p>
            </div>
            <Image src="/images/dashboard.png" alt="dashboard" width={100} height={100} />
          </div>
        </section>
        <section className="sec-2">
          <img src="" alt="" />
        </section>
        </main>
      </section>
    </div>
  );
}
