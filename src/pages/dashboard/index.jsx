import React from "react";

export default function Index() {
  return (
    <>
      <main className="flex w-full h-screen">
        <aside className="w-60 h-screen bg-gray-700 hidden sm:block">
          <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
            <div className="text-sm">
              <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                <a href="/support">Support Server</a>
              </div>
              <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                <a href="/dashboard/ban">Create a Ban</a>
              </div>
            </div>
          </div>
        </aside>
        <section className="w-full p-4">
          <div className="w-full h-64 text-gray-100 p-4 text-md">
            Welcome to the Staff Panel!
            <div className="overflow-hidden">
              <a className="mr-4">Support Server</a>
              <a className="text-gray-200">File a ban report!</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
