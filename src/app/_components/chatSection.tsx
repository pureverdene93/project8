"use client";
import { ExitIcon } from "../_icons/exitIcon";

export const ChatSection = () => {
  return (
    <div className="w-[380px] h-[472px] border border-zinc-200 rounded-lg flex flex-col">
      <div className="w-full h-12 border-b border-zinc-200 flex items-center justify-between pl-4 pr-4">
        <p className="text-black text-[16px] font-medium">Chat assistant</p>
        <button className="w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center cursor-pointer">
          <ExitIcon />
        </button>
      </div>
    </div>
  );
};
