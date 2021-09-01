import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export default function Ban() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:3000/api/private/ban", {
      method: "POST",
      body: JSON.stringify(data),
    });

    toast.success("Successfully submitted data!");
  };

  return (
    <>
      <main className="flex w-full h-screen">
        <aside className="w-60 h-screen bg-gray-700 hidden sm:block">
          <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
            <div className="text-sm">
              <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                <a href="/dashboard">Dashboard</a>
              </div>
              <div className="bg-gray-700 text-blue-300 p-2 rounded mt-2 cursor-pointer hover:bg-gray-900">
                <a href="/dashboard/ban">Create a Ban</a>
              </div>
            </div>
          </div>
        </aside>
        <section className="w-full p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-4 card bg-gray-700 max-w-md p-10 md:rounded-lg my-8 mx-auto">
              <div className="title">
                <h1 className="text-gray-100 font-bold text-center">
                  Report a Roblox User.
                </h1>
              </div>
              <div className="htmlForm mt-4">
                <div className="flex flex-col text-sm">
                  <label
                    htmlFor="title"
                    className="text-gray-100 font-bold mb-2"
                  >
                    Roblox Username
                  </label>
                  <input
                    {...register("ruser", { required: true })}
                    className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
                    type="text"
                    placeholder="Enter a roblox username"
                  />
                  {errors.ruser && <p>Roblox username is required.</p>}
                </div>
                <div className="text-sm flex flex-col">
                  <label
                    htmlFor="description"
                    className="text-gray-100 font-bold mt-4 mb-2"
                  >
                    Reason
                  </label>
                  <input
                    className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
                    type="text"
                    {...register("reason", { required: true })}
                    placeholder="Enter a reason"
                  />
                  {errors.reason && <p>Time is required.</p>}
                </div>
                <div className="text-sm flex flex-col">
                  <label
                    htmlFor="description"
                    className="text-gray-100 font-bold mt-4 mb-2"
                  >
                    Length of ban
                  </label>
                  <input
                    className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
                    type="number"
                    {...register("time", { required: true })}
                    placeholder="Enter a ban duration"
                  />
                  {errors.time && <p>Time is required.</p>}
                </div>
                <div className="text-sm flex flex-col">
                  <label
                    htmlFor="description"
                    className="text-gray-100 font-bold mt-4 mb-2"
                  >
                    Notes
                  </label>
                  <input
                    className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
                    type="text"
                    {...register("notes", { required: false })}
                    placeholder="Additional Notes"
                  />
                  {errors.notes && <p>Notes is required.</p>}
                </div>
                <div class="options md:flex md:space-x-6 text-sm items-center text-gray-700 mt-8">
                  <select class="w-full border border-gray-200 p-2 focus:outline-none focus:border-gray-500">
                    <option value="select" selected>
                      Ban Duration
                    </option>
                    <option value="bug">Permanent</option>
                    <option value="1d">1 day</option>
                    <option value="2d">2 days</option>
                    <option value="3d">3 days</option>
                    <option value="3d">4 days</option>
                    <option value="3d">5 days</option>
                    <option value="3d">6 days</option>
                    <option value="3d">7 days</option>
                  </select>
                </div>
              </div>
              <div className="submit">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 shadow-lg text-white px-4 py-2 hover:bg-indigo-700 mt-8 text-center font-semibold focus:outline-none "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
