"use client";
import { useState } from "react";
import { GenerateButton } from "../_components/generateButton";
import { ModelDescription } from "../_components/modelDescription";
import { ModelFooter } from "../_components/modelFooter";
import { ModelHeader } from "../_components/modelHeader";
import { DocumentIcon } from "../_icons/documentIcon";

export const ModelIngredientRecognition = () => {
  const [ingredient, setIngredient] = useState("");
  console.log(ingredient);

  return (
    <div className="flex flex-col gap-6">
      <ModelHeader title={"Ingredient recognition"} />
      <div className="flex flex-col gap-2">
        <ModelDescription
          title={"Describe the food, and AI will detect the ingredients."}
        />
        <textarea
          placeholder="Describe recognition"
          className="outline-none w-full h-[124px] rounded-lg border border-zinc-200 text-[14px] font-regular text-[#18181B] pl-3 pr-3 pb-2 pt-2"
          onChange={(e) => setIngredient(e.target.value)}
        />
        <GenerateButton
          changeStyle={ingredient.length > 0 ? "bg-black" : "bg-[#71717a]"}
        />
      </div>
      <ModelFooter
        title={"Identified Ingredients"}
        description={"First, enter your text to recognize an ingredients."}
        icon={<DocumentIcon />}
      />
    </div>
  );
};
