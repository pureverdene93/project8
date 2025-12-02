"use client";
import { useState } from "react";
import { GenerateButton } from "../_components/generateButton";
import { ModelDescription } from "../_components/modelDescription";
import { ModelFooter } from "../_components/modelFooter";
import { ModelHeader } from "../_components/modelHeader";
import { ImageIcon } from "../_icons/imageIcon";

export const ModelImageCreator = () => {
  const [describeFood, setDescribeFood] = useState("");
  return (
    <div className="flex flex-col gap-6">
      <ModelHeader title={"Food image creator"} />
      <div className="flex flex-col gap-2">
        <ModelDescription
          title={"What food image do you want? Describe it briefly."}
        />
        <textarea
          placeholder="Describe food"
          className="outline-none w-full h-[124px] rounded-lg border border-zinc-200 text-[14px] font-regular text-[#18181B] pl-3 pr-3 pb-2 pt-2"
          onChange={(e) => setDescribeFood(e.target.value)}
        />
        <GenerateButton
          changeStyle={describeFood.length > 0 ? "bg-black" : "bg-[#71717a]"}
        />
      </div>
      <ModelFooter
        title={"Result"}
        description={"First, enter your text to generate an image."}
        icon={<ImageIcon />}
      />
    </div>
  );
};
