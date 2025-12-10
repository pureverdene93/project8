export const Header = () => {
  return (
    <div className="bg-white w-full h-14 border-b flex items-center justify-between px-6 border-zinc-200 shrink-0">
      <p className="font-semibold text-[24px] text-black">Quiz app</p>
      <img className="w-10 h-10 object-cover rounded-full" src={"/emma.png"} />
    </div>
  );
};
