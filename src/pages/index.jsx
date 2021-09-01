import React from "react";
import Card from "../components/Card";

export default function Index({ rawData }) {
  return (
    <>
      <section className="py-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-gray-100 text-3xl md:text-4xl font-medium">
            Roblox Banned User List
          </h1>
          <p className="text-gray-200 text-2xl">
            This shows users banned from our game.
          </p>
        </div>

        <div className="flex items-center mt-10 justify-center">
          {rawData.map((item, i) => (
            <div class="mx-10 pt-15">
              <div>
                <Card key={i} username={item.ruser} time={item.time} reason={item.reason} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

Index.getInitialProps = async (ctx) => {
  try {
    const res = await fetch("http://localhost:3000/api/private/ban");
    const json = await res.json();
    return { rawData: json.data };
  } catch (e) {
    console.log(e);
    return { rawData: [] };
  }
};
