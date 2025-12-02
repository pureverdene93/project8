"use client";
import { ChangeEvent, useState } from "react";
import { GenerateButton } from "../_components/generateButton";
import { ModelDescription } from "../_components/modelDescription";
import { ModelFooter } from "../_components/modelFooter";
import { ModelHeader } from "../_components/modelHeader";
import { DocumentIcon } from "../_icons/documentIcon";
import { RemoveIcon } from "../_icons/removeIcon";

export const ModelImageAnalysis = () => {
  const [image, setImage] = useState<string | null>(null);
  const imageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  return (
    <div className="flex flex-col gap-6">
      <ModelHeader title={"Image analysis"} />
      <div className="flex flex-col gap-2">
        <ModelDescription
          title={"Upload a food photo, and AI will detect the ingredients."}
        />

        <label>
          {!image && (
            <div className="w-full min-h-10 rounded-lg flex border items-center pl-2.5 gap-2">
              <input
                type="file"
                className="w-[95px] h-10 hidden"
                accept="image/png, image/jpeg"
                onChange={imageUpload}
              />
              <p className="cursor-pointer text-[14px] text-black font-medium">
                Choose file
              </p>
              <p className="text-[14px] text-[#71717A] font-normal">
                JPG , PNG
              </p>
            </div>
          )}
          {image && (
            <div className="w-52 h-[141px] rounded-lg p-1 relative border flex justify-end items-end">
              <img
                src={image}
                className="absolute w-[200px] h-[133px] object-cover rounded-lg z-[-1]"
              />
              <button
                className="w-6 h-6 rounded-lg border cursor-pointer flex justify-center items-center bg-white mb-1.5 mr-1.5"
                onClick={() => setImage(null)}
              >
                <RemoveIcon />
              </button>
            </div>
          )}
        </label>
        <GenerateButton changeStyle={image ? "bg-black" : "bg-[#71717a]"} />
      </div>
      <ModelFooter
        title={"Here is the summary"}
        description={"First, enter your image to recognize an ingredients."}
        icon={<DocumentIcon />}
      />
    </div>
  );
};
