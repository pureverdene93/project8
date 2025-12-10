"use client";
import { useState } from "react";
import { SideBarIcon } from "../_icons/sideBarIcon";
import { GeneratorHistoy } from "../_components/generatorHistory";
type MyProps = {
  sideBarClose: () => void;
};
export const SideBarOpened = ({ sideBarClose }: MyProps) => {
  const [sideBarAnimation, setSideBarAnimation] = useState("animate-slideIn");
  const close = () => {
    setSideBarAnimation("animate-slideOut");
  };
  const sideBarAnimationEnd = () => {
    if (sideBarAnimation === "animate-slideOut") {
      sideBarClose();
    }
  };

  return (
    <div
      className={`w-[300px] h-full bg-white border-r border-zinc-200 flex flex-col ${sideBarAnimation} duration-300 p-4`}
      onAnimationEnd={sideBarAnimationEnd}
    >
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between w-full h-10">
          <p className="text-[20px] text-black font-semibold">History</p>
          <button className="cursor-pointer w-fit h-fit" onClick={close}>
            <SideBarIcon />
          </button>
        </div>
        <GeneratorHistoy />
      </div>
    </div>
  );
};
