"use client";
type Props = {
  changeStyle: string;
};
export const GenerateButton = ({ changeStyle }: Props) => {
  return (
    <div className="flex justify-end">
      <button
        className={`flex justify-center items-center w-[94px] h-10 cursor-pointer font-medium text-[14px] bg-[#71717a] rounded-lg ${changeStyle}`}
      >
        Generate
      </button>
    </div>
  );
};
