import { GenerateButton } from "../_components/generateButton";
import { ModelDescription } from "../_components/modelDescription";
import { ModelFooter } from "../_components/modelFooter";
import { ModelHeader } from "../_components/modelHeader";
import { DocumentIcon } from "../_icons/documentIcon";

export const ModelImageAnalysis = () => {
  return (
    <div className="flex flex-col gap-6">
      <ModelHeader title={"Image analysis"} />
      <div className="flex flex-col gap-2">
        <ModelDescription
          title={"Upload a food photo, and AI will detect the ingredients."}
        />
        <div className="w-full h-10 rounded-lg flex border items-center pl-2.5 gap-2">
          <input type="file" className="w-[95px] h-10 cursor-pointer" />
          <p className="text-[14px] text-[#71717A] font-normal">JPG , PNG</p>
        </div>
        <GenerateButton />
      </div>
      <ModelFooter
        title={"Here is the summary"}
        description={"First, enter your image to recognize an ingredients."}
        icon={<DocumentIcon />}
      />
    </div>
  );
};
