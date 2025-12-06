"use client";
import { useState } from "react";
import { MessageIcon } from "../_icons/messageIcon";
import { ChatSection } from "../_components/chatSection";

export const ChatAssistant = () => {
  const [state, setState] = useState(false);
  return (
    <div className="w-full flex items-center justify-end pr-9 pb-9">
      {state === true ? (
        <ChatSection changeState={() => setState(false)} />
      ) : (
        <button
          className="w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer mb-9 mr-9"
          onClick={() => setState(true)}
        >
          <MessageIcon />
        </button>
      )}
    </div>
  );
};
