"use client";

import AuthContext from "@/context/AuthContext";
import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const UpdatePassword = () => {
  const { error, updatePassword, clearErrors } = useContext(AuthContext);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();

    updatePassword({
      currentPassword,
      newPassword,
    });
  };

  return (
    <>
      <div
        style={{ maxWidth: "480px" }}
        className="mb-20 p-2 md:p-0 lg:p-0 mx-auto rounded bg-white"
      >
        <form className="text-md md:text-xl lg:text-xl" onSubmit={submitHandler}>
          <h2 className="mb-5 text-xl md:text-2xl lg:text-3xl font-semibold">Update Password</h2>

          <div className="mb-2 md:mb-4 lg:mb-4">
            <label className="block mb-1"> Current Password </label>
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md px-1 md:px-3 lg:px-3 py-1 md:py-2 lg:py-2 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="password"
              placeholder="Type your password"
              minLength={6}
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          <div className="mb-2 md:mb-4 lg:mb-4">
            <label className="block mb-1"> New Password </label>
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md px-1 md:px-3 lg:px-3 py-1 md:py-2 lg:py-2 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="password"
              placeholder="Type your password"
              minLength={6}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="my-2 px-2 md:px-4 lg:px-4 py-1 md:py-2 lg:py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdatePassword;
