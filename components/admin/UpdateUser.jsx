"use client";

import AuthContext from "@/context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const UpdateUser = ({ user }) => {
  const { error, updateUser, clearErrors, updated, setUpdated } =
    useContext(AuthContext);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [role, setRole] = useState(user?.role);

  useEffect(() => {
    if (updated) {
      setUpdated(false);
      toast.success("User Updated");
    }

    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [error, updated]);

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = { name, email, role };

    updateUser(user?._id, userData);
  };

  return (
    <div
      style={{ maxWidth: "480px" }}
      className="mb-20 p-2 md:p-0 lg:p-0 mx-auto rounded bg-white"
    >
      <form className="text-md md:text-xl lg:text-xl" onSubmit={submitHandler}>
        <h2 className="mb-5 text-xl md:text-2xl lg:text-3xl font-semibold">Update User</h2>

        <div className="mb-2 md:mb-4 lg:mb-4">
          <label className="block mb-1"> Full Name </label>
          <input
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md px-1 md:px-3 lg:px-3 py-1 md:py-2 lg:py-2 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="text"
            placeholder="Type your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-2 md:mb-4 lg:mb-4">
          <label className="block mb-1"> Email </label>
          <input
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md px-1 md:px-3 lg:px-3 py-1 md:py-2 lg:py-2 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="text"
            placeholder="Type your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div class="mb-2 md:mb-4 lg:mb-4">
          <label class="block mb-1"> Role </label>
          <div class="relative">
            <select
              class="block appearance-none border border-gray-200 bg-gray-100 rounded-md px-1 md:px-3 lg:px-3 py-1 md:py-2 lg:py-2 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              name="category"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              {["user", "admin"].map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <i class="absolute inset-y-0 right-0 p-2 text-gray-400">
              <svg
                width="22"
                height="22"
                class="fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z"></path>
              </svg>
            </i>
          </div>
        </div>

        <button
          type="submit"
          className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
