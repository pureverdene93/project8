"use client";
import { useState } from "react";
import { Title } from "../_components/title";
import { PreIcon } from "../_icons/preIcon";
import { SummarizedIcon } from "../_icons/summarizedIcon";
import { ContextHistory } from "../_components/contentHistory";

type MyProps = {
  goPrev: () => void;
  takeTest: () => void;
};

export const GeneratedArticle = ({ goPrev, takeTest }: MyProps) => {
  const [state, setState] = useState(false);
  return (
    <div className="w-full h-full flex flex-col bg-zinc-100 pt-12 items-center gap-6">
      <div className="flex justify-start w-[856px]">
        <button
          className="bg-white w-12 h-10 rounded-lg border border-zinc-200 cursor-pointer flex items-center justify-center"
          onClick={goPrev}
        >
          <PreIcon />
        </button>
      </div>
      <div className="w-[856px] min-h-[356px] bg-white border border-zinc-200 rounded-lg p-7 flex flex-col gap-5">
        <Title title="Article Quiz Generator" />
        <div className="flex flex-col gap-2 h-fit">
          <p className="flex items-center text-zinc-400 text-[14px] font-semibold gap-1">
            <SummarizedIcon />
            Summarized content
          </p>
          <p className="flex items-center text-black text-[24px] font-semibold gap-2">
            Genghis khan
          </p>
          <div className="w-[800px] min-h-[120px] max-h-[252px] overflow-y-scroll text-[14px] font-normal text-black">
            Genghis Khan, born Temüjin around 1162, was the founder of the
            Mongol Empire. After his father's death, Temüjin's family was left
            in poverty, and he later killed his half-brother to secure his
            position. He built alliances with leaders like Jamukha and Toghrul,
            and despite being defeated in battle and briefly under the Jin
            dynasty, he rose to power by defeating rivals. By 1206, after
            overcoming the Naiman tribe and executing Jamukha, Temüjin became
            the undisputed ruler of the Mongol steppe, eventually leading a
            series of successful military campaigns that expanded his empire
            across China and Central Asia.
          </div>
        </div>
        <div className="flex w-[800px] justify-between items-center">
          <button
            className="w-[113px] h-10 border border-zinc-200 rounded-lg cursor-pointer flex justify-center items-center font-medium text-[14px] text-black"
            onClick={() => setState(true)}
          >
            See content
          </button>
          <button
            className="w-[108px] bg-black h-10 rounded-lg cursor-pointer flex justify-center items-center font-medium text-[14px] text-white"
            onClick={takeTest}
          >
            Take a quiz
          </button>
        </div>
      </div>
      {state && <ContextHistory closeModal={() => setState(false)} />}
    </div>
  );
};
