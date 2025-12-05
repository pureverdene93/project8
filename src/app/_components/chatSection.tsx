"use client";
import { ExitIcon } from "../_icons/exitIcon";
import { SendMessageIcon } from "../_icons/sendMessageIcon";

type Props = {
  changeState: () => void;
};

export const ChatSection = ({ changeState }: Props) => {
  return (
    <div className="w-[380px] h-[472px] border border-zinc-200 rounded-lg flex flex-col justify-between">
      <div className="w-full h-12 border-b border-zinc-200 flex items-center justify-between pl-4 pr-4">
        <p className="text-black text-[16px] font-medium">Chat assistant</p>
        <button
          className="w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center cursor-pointer"
          onClick={changeState}
        >
          <ExitIcon />
        </button>
      </div>
      <div className="w-full min-h-14 border-t border-zinc-200 flex items-center justify-around">
        <textarea
          className="w-[300px] h-10 rounded-lg border border-zinc-200 outline-none text-[#71717a] font-normal text-[14px] pl-3 pr-3 pb-2 pt-2"
          placeholder="Type your message..."
        />
        <button className="w-10 h-10 rounded-full bg-black cursor-pointer flex items-center justify-center">
          <SendMessageIcon />
        </button>
      </div>
    </div>
  );
};
