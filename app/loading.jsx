"use client";

import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <RotatingLines
        visible={true}
        width="96"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
      />
    </div>
  );
};

export default Loading;
