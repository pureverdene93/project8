"use client";
import { useState } from "react";
import { SideBarIcon } from "../_icons/sideBarIcon";
import { ArticleGenerator } from "./articleGenerator";

import { SideBarOpened } from "./sideBarOpened";
import { GeneratedArticle } from "./generatedArticle";

export const SideBarAndGenerator = () => {
  const [sideBarState, setSideBarState] = useState(false);
  const [step, setStep] = useState(1);
  return (
    <div className="flex w-full h-full justify-between">
      {sideBarState ? (
        <SideBarOpened sideBarClose={() => setSideBarState(false)} />
      ) : (
        <div className="h-full w-[72px] border-r border-zinc-200 flex justify-center">
          <button
            className="cursor-pointer px-6 pt-6 w-fit h-fit"
            onClick={() => setSideBarState(true)}
          >
            <SideBarIcon />
          </button>
        </div>
      )}
      {step === 1 && <ArticleGenerator generateFinished={() => setStep(2)} />}
      {step === 2 && <GeneratedArticle goPrev={() => setStep(1)} />}
    </div>
  );
};
